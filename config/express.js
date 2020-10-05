var bodyParser = require('body-parser'),
    express = require('express'),
    passport = require('passport'),
    path = require('path');
var cors = require('cors');
module.exports = () => {
    var app = express();
    // for parsing application/json
    app.use(bodyParser.json());
    // for parsing application/xwww-
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "../public", "client", "demo")));
    app.use(cors());
    app.use(passport.initialize());
    app.use(passport.session());
    // routes
    require('../routes/index')(app);
    require('../routes/User.routes')(app);
    require('../routes/Job.routes')(app);
       if(process.env.NODE_ENV === "development")
    {
        // CORS rquests
        app.use("/", (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "https://fierce-springs-34587.herokuapp.com/");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization");
            next();
        });
        app.get('*',(req,res)=>{
            res.sendFile(path.join(__dirname, '../client', 'demo', 'index.html'));
            // console.log
        })
    } 
    return app;
};