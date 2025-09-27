'use server'

import connectToDB from "@/database";
import Login from "@/models/login";
import bcryptjs from "bcryptjs";  // ✅ Import bcryptjs
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function registerUserAction(formData) {
    await connectToDB();
    try {
        const { name, email, password } = formData;

        // ✅ Check if user exists
        const checkUser = await Login.findOne({ email });
        if (checkUser) {
            
            return {
                success: false,
                message: "User already exists",
            };
        }

        // ✅ Await genSalt
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // ✅ Create new user
        const newlyCreated = new Login({
            name,
            email,
            password: hashedPassword,
        });

        const savedLogin = await newlyCreated.save();

        if (savedLogin) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(savedLogin)),
            };
        } else {
            return {
                success: false,
                message: "Something went wrong while saving user",
            };
        }
    } catch (e) {
        console.error("Registration error:", e);
        return {
            success: false,
            message: e.message || "Something went wrong",
        };
    }
}


export async function logInUserAction(formData) {
    await connectToDB();
    try{
        const {email,password} = formData
        const checkUser= await Login.findOne({email})
        if(!checkUser) {
            return {
            success:false,
            message: "email is not registered"
            }
        }
        const checkPassword = await bcryptjs.compare(password,checkUser.password)

        if(!checkPassword) {
            return {
                success: false,
                message: "password is incorrect"
            }
        }

        const createdFormData = {
            id: checkUser._id,
            name:checkUser.name,
            email: checkUser.email, 
        }

        const token = jwt.sign(createdFormData, "DEFAULT_KEY", {expiresIn: "1d"})

        const getCookies= await cookies();
        getCookies.set("token",token)

        return {
            success:true,
            message: "Login Successful"
        }
    }catch(error) {
        console.log(error)
        return {
            success:false,
            message: "something went wrong"
        }
    }
}

export async function fetchAuthUserAction() {
    await connectToDB();
    try{
        const getCookies= await cookies();
        const token = getCookies.get("token")?.value || "";
        if(token === "") {
            redirect("/sign-in")
            return {
                success: false,
                message:"token is invalid"
            }
        }
        const decodedToken = jwt.verify(token,"DEFAULT_KEY")
        const getUserInfo = await Login.findOne({_id:decodedToken.id});

        if(getUserInfo) {
            return {
                success:true,
                data:JSON.parse(JSON.stringify(getUserInfo))
            }
        }else {
            return {
                success: false,
                message: "something went wrong"
            }
        }
    }catch(error) {
        console.log(error)
        return {
            success: false,
            message: "something wented wrong"
        }
    }
}




export async function logOutUserAction() {
    const getCookies = cookies();
    getCookies.set("token", "");
    redirect("/sign-in"); // Redirects to sign-in page
}