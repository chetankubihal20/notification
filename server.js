const http = require('http')
cors= require('cors');


const mongoose = require('mongodb').MongoClient;
mongoose.connect("mongodb://localhost:27017/University" ); 

const port = process.env.PORT || 40000;

const app = require('./app');
app.use(cors);
const server = http.createServer(app);

server.listen(port);