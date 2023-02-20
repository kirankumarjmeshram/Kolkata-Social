const express = require("express");
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Kolkata Social`)
  })
    

app.listen(1234,async(res,rec)=>{
    //await connect();
    console.log("Listening on port 1234")
})