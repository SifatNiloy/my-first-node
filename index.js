const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello from my first node, installed nodemon, for auto restart')
});

const users = [
    { id: 1, name: 'j rowling', email: "rowling@gmail.com", phone: '01727483789' },
    { id: 2, name: 'dan brown', email: "danbrown@gmail.com", phone: '01727483789' },
    { id: 3, name: 'jems rolins', email: "rolins@gmail.com", phone: '01727483789' },
    { id: 4, name: 'henry hagard', email: "henry@gmail.com", phone: '01727483789' },
    { id: 5, name: 'jule verne', email: "juleverne@gmail.com", phone: '01727483789' },
    { id: 6, name: 'arther doyel', email: "arther@gmail.com", phone: '01727483789' },
    { id: 7, name: 'stephin king', email: "stephen@gmail.com", phone: '01727483789' }

]
app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user)
});
app.post('/user', (req, res) => {
    console.log(req);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port', port)
})