var connection = require("./connection.js");
//create orm variable
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM burgers_db.burgers";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err){
        throw err

      } else {
        
        console.log(result)
        cb(result);
      }
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO "+ table;
    //TODO: complete query string
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "vals (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, col, val, columnToUpdate, valueToUpdate, cb) {
    var queryString = "UPDATE "+table+ "SET "+col+ "= "+val+ "WHERE "+columnToUpdate+ "= "+valueToUpdate+";";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        cb(result);
        console.log(result);
      }
    );
  }
};

module.exports = orm;
