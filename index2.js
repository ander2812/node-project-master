const { Router } = require('express');
const router = Router();
const path = require("path");
const { convertCSVToArray } = require ( 'convert-csv-to-array' ) ;
const fs = require("fs");
const { parse } = require("csv-parse");
const { echarts } = require('echarts');

router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname + "/index.html"));

    


    //fs.createReadStream("./MapaFactoresEstrategicos.csv")
    //.pipe(parse({ delimiter: ",", from_line: 2 }))
    //.on("data", function (row) {
        //console.log(row);
    //})



});

module.exports = router;