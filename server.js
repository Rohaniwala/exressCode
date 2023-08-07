const express = require('express');

var app = express();

app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     res.send("hello");

// })
app.get('/page1', (req, res) => {
    var compaines =
        [
            { name: 'LinkedIn', city: 'MAxico' },
            { name: 'Google ', city: 'India' },
            { name: 'ThoughWork', city: 'London' },
            { name: 'LinkedIn', city: 'MAxico' },
            { name: 'Ravindrasinh ', city: 'India' },
            { name: 'ThoughWork', city: 'London' }

        ];

    res.render('page1', { var1: "val1", var2: 10, compaines: compaines });
})

app.listen(8000);
