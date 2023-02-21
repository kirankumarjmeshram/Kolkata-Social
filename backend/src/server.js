
const app = require("./index");
const connect = require("./configs/db");

app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue; font-size:100px;" >Hello World</h1>`);
  })

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  await connect();
});