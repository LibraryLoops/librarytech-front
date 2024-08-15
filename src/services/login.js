import api from "../utils/api"

export const loginAuth = async ({email, password}) => {
    const response = await api.post("/auth/login", {
        email,
        senha: password
    })
    return response.data
} 