



import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
    {
      userId:{
        type:mongoose.Schema.Types.ObjectId ,
        required:true,
     },

     
         cus_name:{ type:String},
        cus_address:{ type:String},
        cus_city:{ type:String},
        cus_country:{ type:String},
        cus_fax:{ type:String},
        cus_phone:{ type:String},

        cus_shipping_name:{ type:String},
        cus_shipping_address:{ type:String},
        cus_shipping_city:{ type:String},
        cus_shipping_country:{ type:String},
        cus_shipping_state:{ type:String},
        cus_shipping_fax:{ type:String},
        cus_shipping_phone:{ type:String},
        cus_shipping_postcode:{ type:String},
    },

    {
         timestamps:true,
         versionKey:false,
    },

);


const ProfileModel = mongoose.model("user-profiles"  , DataSchema);
export default  ProfileModel ;