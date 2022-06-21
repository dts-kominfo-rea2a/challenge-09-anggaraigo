// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = ({ data }) => {
    return (
        <div className='container'>
            <div className="bio">
                <img src={data.photo} alt={data.photo} className="ava" />
                <p className='name'>{data.name}</p>
                <p className='phone'>{data.phone}</p>
                <p className='email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;