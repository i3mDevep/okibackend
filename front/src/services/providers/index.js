import api from '../instance'

export const serviceListProviders = async () => {
    return await api.get('/providers/')
}
export const serviceCreateProvider = async (body) => {
    return await api.post('/providers/', body)
}
export const serviceDeleteProvider = async (id) => {
    return await api.delete('/providers/'+ id )
}