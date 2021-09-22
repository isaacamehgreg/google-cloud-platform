const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write("<h1>gcloud hosting works</h1>")
    res.end;
})


var port = process.env.PORT || 8000;
app.listen(port, ()=> console.log('server is on'));