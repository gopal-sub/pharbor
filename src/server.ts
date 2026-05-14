import express from 'express';
// import routes from routes
import {credentialRouter} from './routes/credentialRouter.js';

const server_port = 3000


const app = express();

app.use('/api/v1/accounts', credentialRouter);



app.listen(server_port, ()=>{
    console.log(`server is running on port ${server_port}`)
})