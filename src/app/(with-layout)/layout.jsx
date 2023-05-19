import Image from 'next/image'
import Link from 'next/link'
import style from './Medico.module.css'
import Button from '../../components/Button'

export default function Home({ children }) {

    return (

        <div className={style.container}>
            <header className={style.header}>
                <img src="/logo-white.svg" alt="" />
                <ul>
                    <li> <img src="/notification.svg" alt="" /> </li>
                    <li> <img src="/user.svg" alt="" /> </li>
                </ul>
            </header>
            <main className={style.main}>
                {children}
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}