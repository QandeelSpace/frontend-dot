import API from "./api"

const getAllItems = async () => {
    const res = await API.get("/items/all");
    // this line to be return details based on data
    return res.data
}

export {
    getAllItems,
}