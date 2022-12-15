import React from 'react';
import axios from 'axios';
import AfficheDonnees from './AfficheDonnees';
const User = () => {
    const [dataAffiches, setDataAffiches] = React.useState([]);

    const affiche = async () => {
        const data = await axios.get('http://localhost:8080/getAll');

        const datasAffiche = data.data.data.map((item) => {
            return (<AfficheDonnees
                id={item.id}
                nom={item.nom}
                prenoms={item.prenoms}
                email={item.email}
                key={item.id}
            />)
        })
        setDataAffiches(datasAffiche);
    }

    return (
        <div>
            <h3>Voici tous les utilisateurs</h3>
            <table>
                <thead>
                    <tr>
                        <td>identifiant</td>
                        <td>nom</td>
                        <td>prénom(s)</td>
                        <td>email</td>
                    </tr>

                </thead>
            <tbody>
                {dataAffiches}
            </tbody>
            </table>

            <button 
            onClick={affiche}
            className="btn btn-success">Afficher Utilisateurs</button>
        </div>
    );
};

export default User;