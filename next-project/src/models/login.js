import mongoose from "mongoose"

const LoginSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Login = mongoose.models.Login ||  mongoose.model("Login",LoginSchema);

export default Login;