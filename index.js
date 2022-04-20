const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: "01239486754"},
    {id: 2, name: 'Kobori', email: 'Kobori@gmail.com', phone: "01239486754"},
    {id: 3, name: 'Nurani', email: 'Nurani@gmail.com', phone: "01239486754"},
    {id: 4, name: 'Bobita', email: 'Bobita@gmail.com', phone: "01239486754"},
    {id: 5, name: 'Razzak', email: 'Razzak@gmail.com', phone: "01239486754"}
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    console.log('query',req.query)
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port, () => {
    console.log(`Hello are you listening me on port ${port}`)
})  