



import UserModel from "../models/UserModel.js";
import ProfileModel from "../models/UserProfileModel.js";
import { EmailSend } from "../utils/EmailHelper.js";
import { EncodeToken } from "../utils/TokenHelper.js";



export const UserOTPService = async (req)=> {

    try {
    const email = req.params.email ;
    const code = Math.floor( 100000 + Math.random() * 900000);
    const emailText = `Your Verification Code is ${code}`;
    const emailSubject = 'Email Verification';
    
    await EmailSend(email ,emailText ,emailSubject) ;
    await UserModel.updateOne({email:email} , {$set:{otp:code}} , {upsert:true});
    return {status: "success" ,message:'otp has been sent.'
    }
    
    } catch (err) {
   
      return { status: 'failed' , data:err.toString()} ;
    }
};




export const VerifyOTPService = async (req)=> {

    try {
    const email = req.params.email ;
    const otp = req.params.email ;
    const total = await UserModel.find({email:email ,otp:otp}).countDocuments();

    if (total==1){
      let user_id =await UserModel.find({
        email:email, otp:otp,
      }).select("_id");

      let token = EncodeToken(email,user_id[0]._id.toString());
      await UserModel.updateOne({email:email}, {$set:{otp:"0"}});
      return {status: "success" ,message:'otp valid.' , token:token}
    }else{
      return{status:'failed', message:'invalid otp'}
    }
    
    } catch (err) {
   
      return { status: 'fail' , data:err.toString()} ;
    }
};


    

export const SaveProfileService = async (req)=> {
    try {
     const user_id = req.headers.user_id ;
     let reqBody = req.body ;
     reqBody.user_id =user_id ;

     await ProfileModel.updateOne( {userID:user_id} ,
      { $set:reqBody}, 
      {upsert:true});
     return { status:"success" , message:"profile save successfully"}
      
    } catch (error) {
      return { status:'failed' , data:error.toString()}
    }

};




export const ReadProfileService = async (req)=> {
        try {
          const user_id = req.headers.user_id ;
          const result = await ProfileModel.find({userID:user_id});

        return { status:'success' , data:result } ;
        
      
    } catch (error) {
      return { status:'failed' , data:error.toString()}
    }

};



export const UpdateProfileService = async (req)=> {
    try {
     const user_id = req.headers.user_id ;
     let reqBody = req.body ;
     reqBody.user_id =user_id ;

     await ProfileModel.updateOne( 
      {userID:user_id} ,
      { $set:reqBody}, 
      {upsert:true}
    );
     return { status:"success" , message:"profile save successfully"}
      
    } catch (error) {
      return { status:'failed' , data:error.toString()}
    }

};

export const DeleteProfileService = async (req)=> {
    try {
     const user_id = req.headers.user_id ;
     let reqBody = req.body ;
     reqBody.user_id =user_id ;

     await ProfileModel.deleteOne( 
      {userID:user_id} ,
      { $set:reqBody}, 
      {upsert:true}
    );
     return { status:"success" , message:"profile save successfully"}
      
    } catch (error) {
      return { status:'failed' , data:error.toString()}
    }

};



