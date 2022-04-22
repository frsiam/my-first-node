const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World ! Next task is nodemon installed')
})

const users = [
    { name: 'bashar', id: 1, phone: 01236347 },
    { name: 'ashar', id: 2, phone: 01231222 },
    { name: 'basir', id: 3, phone: 01266347 }
];
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`, port);
})  