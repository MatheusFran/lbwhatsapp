const express = require('express');
const app = express();
const axios = require('axios');
  
const servers = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002"
]
  
let current = 0;
  
const handler = async (req, res) =>{
  
    const { method, url, headers, body } = req;
    const server = servers[current];
    current === (servers.length-1)? current = 0 : current++
  
    try{
        const response = await axios({
            url: `${server}${url}`,
            method: method,
            headers: headers,
            data: body
        });
        res.send(response.data)
    }
    catch(err){
        res.status(500).send("Server error!")    
    }
}
  

app.use((req,res)=>{handler(req, res)});
  
app.listen(8080, err =>{
    err ?
    console.log("Failed to listen on PORT 8080"):
    console.log("Load Balancer Server "
          + "listening on PORT 8080");
});