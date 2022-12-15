import React from 'react';
import '../style/Inscription.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { insert } from "../action/auth";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Inscription = () => {

    const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
    const [passwordConfirmIsVisible, setpasswordConfirmIsVisible] = React.useState(false);

    let [formData, setFormData] = React.useState({
        nom: "",
        prenom: "",
        password: "",
        confirmPassword: "",
        email: ""
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevalue => {
            return {
                ...prevalue,
                [name]: value//on a remplacé e.target par une destructuration 
            }
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        if (formData.password.split("").length < 6) {
            alert('mot de passe trop court');
            return;
        }
        else if (formData.password !== formData.confirmPassword) {
            alert("password and confirme password must be the same")
            return;
        } else {
            setFormData({
                nom: "",
                prenom: "",
                password: "",
                confirmPassword: "",
                email: ""
            })
            insert(formData);
        }
    }
    return (
        <div>
            <Navbar/>
            <div style={{ marginTop:"2rem" }} className='container-fluid mt-6 d-flex justify-content-center align-items-center'>
                <div className='card my-9 ' style={{ width: "40rem" }}>
                    <div className="card-header text-center text-primary h2"> Créer compte utilisateur</div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group form--group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    required
                                    onChange={handleChange}
                                    name="nom"
                                    placeholder='votre nom'
                                    value={formData.nom}
                                />
                            </div>

                            <div className="form-group form--group">
                                <label htmlFor="prenom">Prénom(s)</label>
                                <input type="text"
                                    className='form-control form-control-lg'
                                    required
                                    onChange={handleChange}
                                    name="prenom"
                                    placeholder='votre prenom'
                                    value={formData.prenom}
                                />
                            </div>

                            <div className="form-group form--group">
                                <label htmlFor="nom">Email</label>
                                <input type="email"
                                    className='form-control form-control-lg'
                                    required
                                    onChange={handleChange}
                                    name="email"
                                    placeholder='votre email'
                                    value={formData.email}
                                />
                            </div>

                            <div className="form-group form--group">
                                <label htmlFor="nom">Mot de passe</label>
                                <div className='input-group'>
                                    <input type={passwordIsVisible ? "text" : "password"}
                                        className='form-control form-control-lg'
                                        name="password"
                                        onChange={handleChange}
                                        placeholder='écrire votre mot de passe ici'
                                        value={formData.password}
                                    />
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2"
                                        onClick={() => {
                                            setPasswordIsVisible(prevalue => !prevalue)
                                        }}
                                    >{passwordIsVisible ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
                            </div>



                            <div className="form-group form--group">
                                <label htmlFor="nom">Confirmer votre mot de passe</label>
                                <div className='input-group'>
                                    <input type={passwordConfirmIsVisible ? "text" : "password"}
                                        className='form-control form-control-lg'
                                        placeholder='confirmation du mot de passe'
                                        value={formData.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handleChange}
                                    />
                                    <span
                                        className="input-group-text"
                                        id="basic-addon2"
                                        onClick={() => {
                                            setpasswordConfirmIsVisible(!passwordConfirmIsVisible)
                                        }}
                                    >{passwordConfirmIsVisible ? <FaEye /> : <FaEyeSlash />}
                                    </span>

                                </div>
                            </div>


                            <div className='d-flex'>
                                <input
                                    className='btn btn-primary btn-block mt-2'
                                    type="submit"
                                    value="Confirmer"
                                />
                                <div className='m-3'><Link to="/connexion">Se connecter</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Inscription;