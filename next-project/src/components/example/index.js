import connectToDB from "@/database";
import Login from "@/models/login";



export default async function registerUserAction(formData) {
    await connectToDB()
    try{
        const {name,email,password} = formData

        const checkUser = await Login.findOne({email})
        if(!checkUser) {
            return {
                success:false,
                message: "user already exists"
            }
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword= await bcryptjs.hash(password,salt)

        const newlyCreatedUser= new Login({
            name,
            email,
            password:hashedPassword
        })

        const updatedUser= await newlyCreatedUser.save()


    }catch(e) {
        console.log(e)
    }
}