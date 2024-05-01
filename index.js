const Express = require('express');
const app = Express();
const port = 5000;

// method http
// get => read
// post => create
// put => update
// delete => delete

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/', (req, res) => {
    res.send('ini adalah post');
})

app.put('/', (req, res) => {
    res.send('ini adalah put');
})

app.delete('/', (req, res) => {
    res.send('ini adalah delete');
})

app.listen(port, () => console.log(`server running on port localhost:${port}`))