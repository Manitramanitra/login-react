import React, { useReducer } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { singing } from '../action/signIn';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react';

const initialState = {
    visible: false,
    formData: {
        email: "",
        password: ""
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FormData":
            return {
                ...state,
                formData: {
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        case "visible":
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state;
    }
}


const Sign = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    let [loginState, setLoginState] = React.useState("coucou")
    // let [formData, setFormData] = React.useState({
    //     email: "",
    //     password: "",
    // });
    const navigate = useNavigate()

    function handleChange(e) {
        const { name, value } = e.target
        // setFormData(prevalue => {
        //     return {
        //         ...prevalue,
        //         [name]: value//on a remplacé e.target par une destructuration 
        //     }
        dispatch({
            type: "FormData",
            payload: {
                [name]: value
            }
        })
    }
    // const [toUsersetToUser]=React.useState(false)

    axios.defaults.withCredentials = true;

    function onSubmit(e) {
        e.preventDefault();
        console.log(state.formData);
        singing(state.formData)
            .then(res => {
                if (res.data.data.message) { setLoginState(res.data.data.message) };
                if (res.data.data.length === 1) {
                    setLoginState(res.data.data[0].prenoms)
                    // navigate("/User")
                }
            })
    }


    useEffect(() => {
        axios.get('http://localhost:8080/connexion')
            .then(response => {
                console.log(response.data.loggedIn)
                if (response.data.loggedIn === true) {
                    setLoginState(response.data.user[0].prenoms)
                    // setToUser(true);
                }
            })

    }, [])

    return (
        <div>
            <Navbar />
            <div className=' mt-4 container-fluid d-flex justify-content-center'>

                <div className='card my-9 ' style={{ width: "30rem" }}>
                    <div className="card-header text-center text-primary h2">Se connecter</div>
                    <div className="card-body">

                        <form onSubmit={onSubmit} method="post">
                            <div className="form-group">
                                <label htmlFor="nom">Email</label>
                                <input type="email"
                                    className='form-control form-control-lg'
                                    required
                                    value={state.formData.email}
                                    onChange={handleChange}
                                    name="email"
                                    placeholder='votre email'
                                />

                            </div>

                            <div className="form-group">
                                <label htmlFor="nom">Password</label>
                                <div className='d-flex input-group'>
                                    <input type={state.visible ? 'text' : 'password'}
                                        className='form-control form-control-lg'
                                        name="password"
                                        value={state.formData.password}
                                        onChange={handleChange}
                                        placeholder='votre passeword'
                                    />
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2"
                                        onClick={() => {
                                            dispatch({ type: "visible" })
                                        }}
                                    >{state.visible ? <FaEye /> : <FaEyeSlash />}
                                    </span>

                                </div>

                            </div>
                            <div>
                                <input
                                    className='btn btn-primary btn-block mt-2'
                                    type="submit"
                                    value="Se connecter"
                                />
                                <Link className="m-3" to="/inscription">créer un nouveau compte</Link>
                            </div>
                        </form>
                    </div>
                    <h3 className='card-footer text-danger text-center'>{loginState}</h3>
                </div>
            </div>
        </div>

    );
};

export default Sign;