var express = require('express');
var app = express();
const port = 8080;
app.get('/',(req, res)=>{
    res.send('Deployed');
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })