import axios from "axios"
export const singing = ({ email, password }) => {
    return axios.post('http://localhost:8080/connexion',{ email, password })
}