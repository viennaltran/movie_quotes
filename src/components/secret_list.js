import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {

// props.log('From secret list');

return (
    <div>
        <h1 className="center">Secret Operatives List</h1>
        <ol>
            <li>Jim</li>
            <li>Jane</li>
            <li>Kevin</li>
            <li>Kathy</li>
            <li>Anthony</li>
            <li>Amber</li>
        </ol>
    </div>
    );
}

export default auth(SecretList);