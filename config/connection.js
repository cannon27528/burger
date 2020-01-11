var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chase",
  password: "Shadow27528",
  database: "burgers_db"
});
//linking to JAWS_DB
// if (process.env.JAWSDB_URL) {
//   connection= mysql.createConnection(process.env.JAWSDB_URL);
// }
// else{connection= mysql.createConnection({
//   host: "tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "wqnnwq1430j17d78",
//   password: "fg3kxdt1e4k7dew7",
//   database: "m7i9xut79j3tp7m6"

// });
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;