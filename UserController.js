



import { SaveProfileService,
         UserOTPService,
         VerifyOTPService,
         DeleteProfileService
      
      }
 from "../services/UserService.js";



 export const UserOTPController = async(req,res) =>{
        const result = await UserOTPService(req,res);
     return res.status(201).json(result);
 };


export const VerifyOTPController = async(req,res)=>{
    const result = await VerifyOTPService(req,res);

    if(result.status="success"){
        res.cookie('token', result.token,   {
            expires:new Date(Date.now() + 24*60*60*1000),
            httpOnly:false
        });
    // res.cookie('token' ,result.token ,cookieOption);
    return res.status(201).json(result);
}else{
        return res.status(201).json(result);
   
    }
};


export const UserLogoutController = async(req,res)=>{
   const cookieOption = {
    expires:new Date(Date.now()- 24 * 60 *60 *1000),
      httpOnly:false,
   };
     res.cookie('token' , "" ,cookieOption);
     res.status(200).json('Logged out successfully.')
};


 export const CreateProfileController = async(req,res) =>{
        const result = await SaveProfileService(req,);
     return res.status(201).json(result);
 };



 export const ReadProfileController = async(req,res) =>{
        const result = await CreateOTPService(req,res);
     return res.status(201).json(result);
 };



 export const UpdateProfileController = async(req,res) =>{
        const result = await SaveProfileService(req,);
     return res.status(200).json(result);
 };
 export const DeleteProfileController = async(req,res) =>{
        const result = await DeleteProfileService(req,);
     return res.status(200).json(result);
 };


