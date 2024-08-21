const express = require('express');
const port = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Simple Node.js Server on k8s is Up and Running')
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});
//test
