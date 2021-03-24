const express = require("express")
const app = express()
app.get("/test", (req, res) =>
  res.json({ code: 0, payload: null, message: null })
)
app.listen(3000, () => {
  console.log("server starting 3000")
})
module.exports = app
