const mysql = require("mysql2");

const app = require("express")();

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "AutomationMangeDB",
});

app.get("/teste", (req, res) => {
  const sql = "SELECT * FROM user";
  pool.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3001, function () {
  console.log("Connected & Listen to port 3000 at /api ..");
});
