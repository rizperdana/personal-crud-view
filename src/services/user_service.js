import http from '../http-common'

class user_service {
    fetch() {
        return http.get('/user')
    }

    detail(id) {
        return http.get(`/user/${id}`)
    }

    create(data) {
        return http.post('/user', data)
    }

    update(id, data) {
        return http.put(`/user/${id}`, data)
    }

    delete(id) {
        return http.delete(`/user/${id}`)
    }

    truncate() {
        return http.delete('/user')
    }
}

export default new user_service()