import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect("mongodb+srv://siaka:boutique@cluster0.d5mjm.mongodb.net/boutique").then(()=>{
        console.log('Connexion à la base de donnée')
    }).catch((err)=>{
        console.log(err)

    });
}
