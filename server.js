const express = require('express');
const port = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('A Simple Node.js Server is Up and Running.......kijgkjgjhgfhjf')
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});
//test
