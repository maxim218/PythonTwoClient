"use strict";

let express = require("express");
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/*', function(request, response) {
    request.on('data', function(data) {
        const s = data + "";
        console.log(s);
        let dict = {};
        let mass = s.split("&");

        for(let i = 0; i < mass.length; i++) {
            let elem = mass[i];
            let arr = elem.split("=");
            let key = decodeURIComponent(arr[0]);
            let value = decodeURIComponent(arr[1]);
            dict[key] = value;
        }

        let a = parseInt(dict['a']);
        let b = parseInt(dict['b']);

        let ans = a + b;

        response.end(ans + "");
    });
});

let port = process.env.PORT || 5005;
app.listen(port);
console.log("Server works on port " + port);
