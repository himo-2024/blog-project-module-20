


import rateLimit from "express-rate-limit";



export const PORT = process.env.PORT ;
export const MONGO_URI = process.env.MONGO_URI;

export const limit = "5mb";


export const limiter = rateLimit({
    windowMs:15*60*1000,
    max:1000
});


