const express = require('express');
const app1 = express();
const app2 = express();
const app3 = express();

// Link dos telefones

const telefone1 = (req, res) => {
    res.redirect('https://wa.me/5534991900522?text=Ol%C3%A1')
}

const telefone2 = (req, res) => {
    res.redirect('https://wa.me/5534993374800?text=Ol%C3%A1')
}

const telefone3 = (req, res) => {
    res.redirect('https://wa.me/5518991274656?text=Ol%C3%A1')
}


app1.get('*', telefone1)
app2.get('*', telefone2)
app3.get('*', telefone3)


app1.listen(3000, err => {
    err ?
        console.log("Failed to listen on PORT 3000") :
        console.log("Application Server listening on PORT 3000");
});


app2.listen(3001, err => {
    err ?
        console.log("Failed to listen on PORT 3001") :
        console.log("Application Server listening on PORT 3001");
});


app3.listen(3002, err => {
    err ?
        console.log("Failed to listen on PORT 3002") :
        console.log("Application Server listening on PORT 3002");
});