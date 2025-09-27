import mongoose from "mongoose"

const connectToDB= async() => {
    const url = "mongodb+srv://giftdavid:promise855@cluster-1.iw535pd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"

     mongoose
        .connect(url)
        .then(()=> console.log("this is message"))
        .catch((error)=> console.log(error))


}

export default connectToDB;