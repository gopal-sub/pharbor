import express from 'express';
// import routes from routes
import {credentialRouter} from './routes/credentialRouter.js';
import {userRouter} from './routes/userRoutes.js';
import {sessionRouter} from './routes/sessionRouter.js';
import {testDbConnection} from './initDabaseConnection.js';
import session from 'express-session';



const server_port = 3000


const app = express();

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
    },
    name: "Session-token"
  })
);

app.use(express.json())
app.use('/api/v1/accounts', credentialRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/session', sessionRouter);







app.listen(server_port, async ()=>{
    await testDbConnection()
    console.log(`server is running on port ${server_port}`)
})