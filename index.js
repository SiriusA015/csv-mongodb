var express = require('express');
var mongoose = require('mongoose');
var csvModel = require('./models/demoModel');
var csv = require('csvtojson');
const fileName = 'demo.csv';
//connect to db  
mongoose.connect('mongodb://localhost:27017/csvdemos', { useNewUrlParser: true })
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))
//init app  

csv()
    .fromFile(fileName)
    .then((jsonObj) => {
        console.log(jsonObj);

        let arrayToInsert = [];
        for (var i = 0; i < jsonObj.length; i++) {
            var oneRow = {
                name: jsonObj[i]['name'],
                start: jsonObj[i]['start'],
                last: jsonObj[i]['last'],
                day: jsonObj[i]['day']
            };
            arrayToInsert.push(oneRow);
        }

        csvModel.insertMany(arrayToInsert, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log('done');
            }
        });
    });
var app = express();

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('server run at port ' + port)); 