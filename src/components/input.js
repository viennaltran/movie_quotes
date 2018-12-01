import React from 'react';

export default ({input, label, meta:{error, touched}, size = 's12', type='text'}) => (
    <div className={`input-field col ${size}`}>
        <input {...input} id={input.name} type={type}/>
        <label htmlFor={input.name}>{label}</label>
        <p className="red-text text-darken-2">{touched && error}</p>
    </div>
)