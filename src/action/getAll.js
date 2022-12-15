import Axios from 'axios'
export const getAll = ()=>{
Axios.get('http://localhost:8080/getAll')
    .then(data =>console.log(data))
    .catch(err=>console.log(err))
}