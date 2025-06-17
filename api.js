

import express from "express";
const router = express.Router();



import { UserOTPController,
         VerifyOTPController,
         UserLogoutController,
         CreateProfileController,
         ReadProfileController,
         UpdateProfileController
        } from "../controllers/UserController.js";





import { AuthVerification } from "../middlewares/AuthVerification.js";


        
        
        
        // authentication routes 

      
        
// user login ,register through email & otp 
router.get('/UserOTP/:email', UserOTPController );
router.get('/VerifyLogin/:email/:otp' , VerifyOTPController);
router.get( '/UserLogout', AuthVerification, UserLogoutController  );


// Profile api 
router.post('/CreateProfile' , AuthVerification, CreateProfileController);
router.get('/ReadProfile', AuthVerification, ReadProfileController);
router.patch('/UpdateProfile', AuthVerification, UpdateProfileController );
router.patch('/DeleteProfile', AuthVerification, DeleteProfileController );


        
        export default router ;


