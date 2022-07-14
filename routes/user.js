const express = require("express");
const router = express.Router();
const pool = require("../helpers/database");
const bcrypt = require("bcrypt");


router.get("/:id", async function (req, res) {
  try {
    const sqlQuery =
      `SELECT id, username, password, email, created_at FROM ${process.env.DB_NAME}.user WHERE id=?;`;
    const rows = await pool.query(sqlQuery, req.params.id);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(400).send(error.message);
  }
  return res.status(200).json({ id: req.params.id });
});

router.post("/register", async function (req, res) {
  try {
    const { username, email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const sqlQuery =
      `INSERT INTO ${process.env.DB_NAME}.user (username, email, password) VALUES (?, ?, ?)`;
    const result = await JSON.stringify(
      pool.query(sqlQuery, [username, email, encryptedPassword])
    );

    return res.status(200).json({ userId: result.insertId });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.post("/login", async function (req, res) {
  try {
    const { id, password } = req.body;

    const sqlGetUser = `SELECT password FROM ${process.env.DB_NAME}.user WHERE id=?`;
    const rows = await pool.query(sqlGetUser, id);
    if (rows) {
      const isValid = await bcrypt.compare(password, rows[0].password);
      return res.status(200).json({ valid_password: isValid });
    }
    return res.status(200).send(`User with id ${id} was not found`);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
module.exports = router;
