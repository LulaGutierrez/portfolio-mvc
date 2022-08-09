const express = require('express');
const app = express();
const path = require('path');
port = 3000

app.listen(port, ()=>{console.log('Server running in http://localhost:' + port);});

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/about', (req,res) => res.sendFile(path.join(__dirname, 'views', 'about.html')))
