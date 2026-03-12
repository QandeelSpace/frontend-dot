import API from "./api"

const LoginUser = async (data) => {
    console.log("users details", data);

    const res = await API.post("/users/login", data)

    return res.data
}

const RegisterUser = (data) => {
    const res = API.post("/users/register", data)
    return res.data
}


export {
    LoginUser,
    RegisterUser
}