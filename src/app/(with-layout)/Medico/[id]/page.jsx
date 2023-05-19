'use client'
import { useEffect, useState } from 'react'

import { useUser } from '../../../../context/Context.js'
import Image from 'next/image'
import Link from 'next/link'
import style from '../../Medico.module.css'
import Select from '../../../../components/Select'
import Button from '../../../../components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';


export default function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()

    const [state, setState] = useState({})







    console.log(userDB)


    return (


        <main className={style.main}>
            <img src="/perfil.png" alt="" />
            <br />
            <h3 className={style.subtitleBlue}>{userDB['Nombre']}</h3>
            <br />
            <h3 className={style.subtitleCenter}>{userDB['Especialidad']}</h3>
            <br />
            <br />
            <br />
            <h3 className={style.subtitle}>{userDB['Especialidad']}</h3>
            <p className={style.description}>{userDB['Descripcion']}</p>
            <br />
            <h3 className={style.subtitle}>Dias de atención</h3>
        <br />

            <div className={style.checkbox}>
                <input type="checkbox" id="L" name="L" checked={userDB['L'] ? true : false} readOnly/>
                <label htmlFor="L">L</label>
                <input type="checkbox" id="M" name="M" checked={userDB['M'] ? true : false} readOnly/>
                <label htmlFor="M">M</label>
                <input type="checkbox" id="M" name="Mi" checked={userDB['Mi'] ? true : false} readOnly/>
                <label htmlFor="M">M</label>
                <input type="checkbox" id="J" name="J" checked={userDB['J'] ? true : false} readOnly />
                <label htmlFor="J">J</label>
                <input type="checkbox" id="V" name="V" checked={userDB['V'] ? true : false} readOnly/>
                <label htmlFor="V">V</label>
                <input type="checkbox" id="S" name="S" checked={userDB['S'] ? true : false} readOnly/>
                <label htmlFor="S">S</label>
                <input type="checkbox" id="D" name="D" checked={userDB['D'] ? true : false} readOnly/>
                <label htmlFor="D">D</label>
            </div>
            <br />
            <h3 className={style.subtitle}>Horarios De Atención</h3>
            <p className={style.description}>{userDB['timeInit']} - {userDB['timeFinish']}</p>
            <br />
            <h3 className={style.subtitle}>Contactos</h3>
            <div className={style.contactos}>
                <p className={style.description}><img src="/telefono.svg" alt="" />{userDB['Telefono']}</p>
                <p className={style.description}><img src="/ubicacion.svg" alt="" />{userDB['Ciudad']}</p>
            </div>
<br />
            <Button styled='buttonSecondary'>Solicitar Ficha</Button>


        </main>


    )
}