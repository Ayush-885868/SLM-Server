import express from "express"
import dotenv  from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import './config/db.js'

//import mongoose from 'mongoose'

import {Router} from './routes/routes.js'

/*import cookieParser from "cookie-parser"
import {UserRouter} from './routes/user.js'
import {SoftReqRouter} from './routes/SoftReq.js' ////
import {softReq} from './model/User.js'
import {errorMiddleware} from'./middleware/errorMiddleware';*/

const app = express()
app.use(express.json())
//app.use(cors());
app.use(cors(
    {
        //origin:"https://slm-client.vercel.app",
        origin:"https://slm-client-ath69wr6d-ayush-885868s-projects.vercel.app",
        methods:["POST", "GET", "PUT", "DELETE", "OPTIONS"],
        //allowedHeaders:['Content-Type','Authorization' ],
        credentials:true
    }
));
dotenv.config({path:"./config/.env"})
/*app.use(cors({
    origin: ["http://localhost:5173"], credentials:true})
)

app.use(cors());
app.use(cookieParser())
app.use('/auth', UserRouter)*/


app.use('/test',Router )
//app.use('/contactmsyt',Router )
app.get("/", (req,res) =>
    res.send("backend is going well")
);
//const mongoose = require('mongoose');
mongoose.connect(process.env.URI);
/*app.use(errorMiddleware);
app.get('/',(req,res)=>{
    console.log("hello")
})*/



//app.use('/auth',SoftReqRouter); 
/*router.route('/add').post(function(req, res) {
    let softReq = new softReq(req.body);
    softReq.save()
            .then(todo => {
    res.status(200).json({'comment': 'comment added successfully'});
            })
            .catch(err => {
    res.status(400).send('adding new comment failed');
            });
    }); 
    app.use('/Usser', router);*/
//mongoose.connect('mongodb://127.0.0.1:27017/authentication')
app.listen(process.env.PORT, ()=>{
    console.log("server is running")
}); 












 


