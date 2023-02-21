
const app = require("./index");
const connect = require("./configs/db");



app.get('/', (req, res) => {
    res.send(`
    
    `)
  })
    

// app.listen(1234,async(res,rec)=>{
//     //await connect();
//     console.log("Listening on port 1234")
// })



// //__________________________________


const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
  await connect();
});