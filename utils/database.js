import mongoose from 'mongoose'

let isConnected  = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"portflection",
        })
        isConnected= true;
        console.log('mongodb connected')

    }catch(error){

    }
}