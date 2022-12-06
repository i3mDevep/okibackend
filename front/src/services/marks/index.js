import api from '../instance'

export const serviceListMarks = async () => {
    return await api.get('/marks/')
}
export const serviceCreateMark = async (body) => {
    return await api.post('/marks/', body)
}
export const serviceDeleteMark = async (id) => {
    return await api.delete('/marks/'+ id )
}