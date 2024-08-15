import api from "../utils/api"


export const getAllUsers = async () => {
    const response = await api.get("/usuarios")
    return response.data
}

export const getUserById = async (id, token) => {
    const response = await api.get(`/usuarios/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const createUser = async (user) => {
    const response = await api.post("/usuarios", user)
    return response.data
}

export const updateUser = async (id, user, token) => {
    const response = await api.put(`/usuarios/${id}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}

export const deleteUser = async (id, token) => {
    const response = await api.delete(`/usuarios/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data
}