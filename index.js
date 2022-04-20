const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/ho', (req, res) => {
    res.send('Hello My first node js app..!')
})
const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: "01239486754"},
    {id: 2, name: 'Kobori', email: 'Kobori@gmail.com', phone: "01239486754"},
    {id: 3, name: 'Nurani', email: 'Nurani@gmail.com', phone: "01239486754"},
    {id: 4, name: 'Bobita', email: 'Bobita@gmail.com', phone: "01239486754"},
    {id: 5, name: 'Razzak', email: 'Razzak@gmail.com', phone: "01239486754"},
    {id: 6, name: 'Ashraful', email: 'Ashraful@gmail.com', phone: "01239486754"},
    {id: 7, name: 'pilot', email: 'pilot@gmail.com', phone: "01239486754"},
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Hello are you listening me on port ${port}`)
})  