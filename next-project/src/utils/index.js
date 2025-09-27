export const userRegistrationFormControls =[ 
    {
        name:"name",
        label: "User Name",
        placeholder: "Please enter your name",
        componentType: "input",
        type: "text"
    },
    {
        name:"email",
        label: "Email",
        placeholder: "Please enter your email",
        componentType: "input",
        type: "email"
    },
    {
        name:"password",
        label: "Password",
        placeholder: "Please enter your password",
        componentType: "input",
        type: "password"
    },
]


export const userSignInFormControls= [
     {
        name:"email",
        label: "Email",
        placeholder: "Please enter your email",
        componentType: "input",
        type: "email"
    },
    {
        name:"password",
        label: "Password",
        placeholder: "Please enter your password",
        componentType: "input",
        type: "password"
    }
]

export const initialSignUpFormData = {
    name:"",
    email: "",
    password: "",
}

export const initialSignInFormData= {
    email: "",
    password: "",
}

