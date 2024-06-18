"use client"

import React, { useState } from 'react';
import Navbar from '@/app/components/navbar';
import styles from './contacto.module.css';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
            <Navbar />
            <h1 className={styles.title}>Contacto</h1>
            {enviado ? (
                <p className={styles.parrafo}>¡El formulario fue enviado correctamente!</p>
            ) : (
                <form className={styles.formRR} onSubmit={handleSubmit}>

                    <label className={styles.sop} htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" placeholder='Ingresa tu correo' name="email" className={styles.tyy} required />

                    <label className={styles.sop} htmlFor="message">Mensaje</label>
                    <textarea id="message" placeholder='Ingresa tu consulta' name="message" className={styles.tyy} required></textarea>

                    <button className={styles.boton} type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
}

export default Contacto;