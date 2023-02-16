const { Router } = require('express');
const router = Router();
const cors = require('cors')

router.get("/", cors(), async (req, res) => {
  const fs = require("fs");

  fs.readFile("./MapaFactoresEstrategicos.csv", (err, data) => {
    if (err) {
      throw new Error(err);
    }

    const csv = String(data) // convert the buffer to a string
      .split("\n") // Split the string into an array where each item contains one line
      .filter(Boolean); // Remove any empty lines

    // Do the rest of the operations on the CSV data here

    //console.log(csv);

    function csvToJSON(csv) {
      const [headers, ...data] = csv.map((row) => row.split(";"));
      return data.map((row) => {
        const rowObject = {};
        row.forEach((value, index) => {
          rowObject[headers[index]] = value;
        });
        //console.log(rowObject)
        return rowObject;
      });
    }

    res.json(csvToJSON(csv)); 


    //jsonStr = JSON.stringify(csvToJSON(csvt));

    //console.log("it a json " + jsonStr );

    //res.json(jsonStr)
  });
  
});

module.exports = router;
