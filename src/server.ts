import express from 'express';
// import routes from routes
import {credentialRouter} from './routes/credentialRouter.js';
import {userRouter} from './routes/userRoutes.js';
import {testDbConnection} from './initDabaseConnection.js'



const server_port = 3000


const app = express();

app.use(express.json())
app.use('/api/v1/accounts', credentialRouter);
app.use('/api/v1/users', userRouter);



app.listen(server_port, async ()=>{
    await testDbConnection()
    console.log(`server is running on port ${server_port}`)
})