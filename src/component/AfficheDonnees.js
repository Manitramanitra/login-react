import React from 'react';

const AfficheDonnees = ({ id, nom, prenoms, email }) => {
    return (
            <tr>
                <td>{id}</td>
                <td>{nom}</td>
                <td>{prenoms}</td>
                <td>{email}</td>
            </tr>
        );
};

export default AfficheDonnees;