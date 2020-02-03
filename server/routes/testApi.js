import express from 'express';
const router = express.Router();


//http://localhost:4000/testAPI?HelloWorld&first=1&second=2
//console.debug(req.query, req.params);
//{ HelloWorld: '', first: '1', second: '2' } {}


export default router.get('/', function(req, res, next) {
    console.log(req.query, req.params);
    res.send('API is working properly.........');
});

