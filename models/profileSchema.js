import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {},
    {
        username : {
            type : String,
            required : [true, "User name wajib di isi"],
            unique : true, //biar ga sm kaya yg lain
            trim : true //untuk menghapus spasi di awal dan akhir
        },
        profilePictur : {
            type : String,
            required : true [true, "Profile wajib dipakai"],
            unique : true,
            trim : true
        },
        Bio : {
            type : String,
            minLength : [10, "Minimal 10"],
            maxLength : [150, "Maximal 10"],
            required : [true , "Bio wajib di isi"],
            trim : true
        },
        User : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true 
        }
    },
    {
        timestamps : true
        }
)

const ProfileSchema = mongoose.Model("Profile", profileSchema)

export default profileSchema