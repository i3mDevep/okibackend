import api from '../instance'

export const signIn = async (body) => {
    return await api.post('/token/', body)
}

export const serviceRefreshToken = async (refresh) => {
    return await api.post('/token/refresh/', refresh)
}