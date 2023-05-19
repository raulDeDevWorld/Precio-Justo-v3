'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter()

    const [select, setSelect] = useState(false)
    const [rol, setRol] = useState('Cliente')



    function handlerSelect () {
        setSelect(!select)
    }


    function handlerUserRol (data) {
        setRol(data)
    }


    function next(e) {
        e.preventDefault()
        router.push(rol)
    }
    return (

        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <Image src="/logo-main.svg" width="200" height="200" alt="User" />
                <br />
                <br />
                <form className={style.form}>
                    <h4 className={style.subtitle}>Registrate</h4>
                    <br />
                    <label htmlFor="">Nombre</label>
                    <input className={style.input} type="text" placeholder="" />
                    <br />
                    <label htmlFor="">Tipo de cuenta</label>
              


                    <div className={select ? style.select: style.noSelect} onClick={handlerSelect}>
                        {rol} <span>{'>'}</span>
                        <ul>
                            <li onClick={(e)=>handlerUserRol('Cliente')}>Cliente</li>
                            <li onClick={(e)=>handlerUserRol('Medico')}>Médico</li>
                            <li onClick={(e)=>handlerUserRol('Clinica')}>Clínica</li>
                            <li onClick={(e)=>handlerUserRol('Distribuidor')}>Distrubuidor</li>
                        </ul>
                    </div>



                    <br />
                    <label htmlFor="">Ciudad</label>
                    <input className={style.input} type="password" placeholder="" />
                    <br />
                    <div className={style.buttonsContainer}>
                        <Button styled='buttonPrimary' click={next} >Registrate</Button>
                    </div>
                    <br />
                    <div className={style.linkContainer} ><Link href="/SignUp" legacyBehavior><a className={style.link}>Olvidaste tu Contraseña</a></Link></div>
                    <br />
                    <div className={style.linkContainer} >Ya tienes una cuenta? <Link href="/" className={style.link}>Iniciar Sesión</Link></div>
                    {/* {userDB && userDB.login && <div className={style.linkContainer} >No tienes una cuenta? <Link href="/SignUp" legacyBehavior><a className={style.link}>Registrate</a></Link></div>} */}
                </form>
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}