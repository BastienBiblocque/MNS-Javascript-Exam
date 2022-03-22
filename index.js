let app = require('express')()

app.use(require('express').json());
// liste des routes pour aller chercher des vues ou des données
app.listen(3000,()=>{
    console.log('Server lancé');
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/index.html');
})
app.get('/add', (req,res) => {
    res.sendFile(__dirname + '/client/pages/add/index.html');
})
app.get('/view', (req,res) => {
    res.sendFile(__dirname + '/client/pages/view/index.html');
})

app.get('/update', (req,res) => {
    res.sendFile(__dirname + '/client/pages/update/index.html');
})

const Data = require('./data/data')
app.get('/data', (req,res) => {
    res.send(Data);
})

app.post('/data', (req,res) => {
    Data.push(req.body);
    res.send(Data);
})

app.get('/data/:id', (req, res) => {
    let myId = req.params.id;
    Data.forEach(element => {
        if(element.id === myId) {
            res.send(element);
        }
    });
})


app.delete('/delete/:id', (req, res) => {
    const index = Data.findIndex(data => data.id === req.params.id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    Data.splice(index,1)
    res.status(200).json('Product deleted')
})

app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const index = Data.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    Data[index] = {
        id: Data[index].id,
        name: req.body.name,
        pays: req.body.pays,
    }
    res.status(200).json('Product updated')
})

app.use('/assets', require('express').static('./client/assets'))