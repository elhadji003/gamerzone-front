import React, { useState } from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register';

const Authentificate = () => {
    const [isAffiche, setIsAffiche] = useState(false);

    const affichageRegister = () => {
        setIsAffiche(!isAffiche);
    };

    return (
        <div>
            {!isAffiche ? (
                <Login onClick={affichageRegister} />
            ) : (
                <Register onClick={affichageRegister} />
            )}
        </div>
    );
}

export default Authentificate;
