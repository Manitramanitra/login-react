import axios from 'axios';
export const insert = ({ nom, prenom, email, password }) => {
    axios.post('http://localhost:8080/insert', {nom, prenom, email, password})
        .then(response=>console.log(response))
}