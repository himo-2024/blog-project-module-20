
import express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import { limit, limiter } from "./src/config/config.js";
import rateLimit from "express-rate-limit";
import router from "./src/routes/api.js";



// import mongoSanitize from "express-mongo-sanitize";
// (no need bydefault it has in express);
// import xss from "xss-clean";  (no need it has bydefault)
// import hpp from "hpp" ;   (no need it has bydefault)


const app = express();




// Secyrity Middlewares /
app.use(cookieParser());
app.use(cors());
app.use(helmet());
// app.use(mongoSanitize()) 
// (n:b:  no need to use dydefault it has in express) 
// app.use(xss());   // (n:b:  no need to use dydefault it has in express) 
// app.use(hpp());    // (n:b:  no need to use dydefault it has in express) 


// parsing middlewares  
app.use(express.json(limit));
app.use(express.urlencoded({extended:true, limit:"5mb"}));



// Rate limiter middlewares
app.use(limiter);
// app.use('etag' , false); (app crase, if open this etag)


// router end point 
app.use('/api/v1'  , router );





export default app ;

