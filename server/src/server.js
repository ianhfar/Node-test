import express from 'express'; 
import testAPIRouter  from '../routes/testApi';
//import expressReactViews from 'express-react-views';
//const bodyParser = require('body-parser');


//import get from '../../routes/html-routes'

const app = express();
app.get('/', (req, res) => {
    res.send('Hello, hello can anyone hear me')
})

app.use("/testAPI", testAPIRouter);


app.listen(80, () => {
  console.log('Listening');
});

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });




