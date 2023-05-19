'use client'
import { useEffect, useState } from 'react'

import { useUser } from '../../../context/Context.js'
import Image from 'next/image'
import Link from 'next/link'
import style from '../Medico.module.css'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Button from '../../../components/Button'
import { useMask } from '@react-input/mask';
import { useRouter } from 'next/navigation';


export default function Home() {
    const router = useRouter()

    const { user, userDB, setUserData } = useUser()

    const [state, setState] = useState({})


    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });





    function onChangeHandler(e) {

        setState({ ...state, [e.target.name]: e.target.value })

    }
    function onChangeHandlerCheck(e) {

        console.log(e.target.name)
        setState({ ...state, [e.target.name]: e.target.checked })

    }
    function onClickHandler(name, value) {
        setState({ ...state, [name]: value })
    }

    function save(e) {
        e.preventDefault()
        setUserData(state)
        router.push('Medico/746572345')
    }

    console.log(state)


    return (


        <main className={style.main}>
            <form className={style.form} action="">
                <h3>Agregar Perfil</h3>
                <div className={style.perfil}>
                    <label htmlFor="file" >Subir Imagen</label>
                    <input id='file' type="file" />
                </div>
                <label htmlFor="">Nombre</label>
                <Input type="text" name="Nombre" onChange={onChangeHandler} />
                <label htmlFor="">Especialidad</label>
                <Input type="text" name="Especialidad" onChange={onChangeHandler} />
                <label htmlFor="">Descripción</label>
                <Input type="text" name="Descripcion" onChange={onChangeHandler} />

                <label htmlFor="">Ciudad</label>
                <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandler} />
                <label htmlFor="">Direccion</label>
                <Input type="text" name="Direccion" onChange={onChangeHandler} />
                <label htmlFor="">Dias de atención</label>

                <div className={style.checkbox}>
                    <input type="checkbox" id="L" name="L" onChange={onChangeHandlerCheck} />
                    <label htmlFor="L">L</label>
                    <input type="checkbox" id="M" name="M" onChange={onChangeHandlerCheck} />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="M" name="Mi" onChange={onChangeHandlerCheck} />
                    <label htmlFor="M">M</label>
                    <input type="checkbox" id="J" name="J" onChange={onChangeHandlerCheck} />
                    <label htmlFor="J">J</label>
                    <input type="checkbox" id="V" name="V" onChange={onChangeHandlerCheck} />
                    <label htmlFor="V">V</label>
                    <input type="checkbox" id="S" name="S" onChange={onChangeHandlerCheck} />
                    <label htmlFor="S">S</label>
                    <input type="checkbox" id="D" name="D" onChange={onChangeHandlerCheck} />
                    <label htmlFor="D">D</label>

                </div>
                <label htmlFor="">Horarios de Atención</label>
                <div className={style.box}>
                    <Input type="time" name={'timeInit'} onChange={onChangeHandler} />
                    <Input type="time" name={'timeFinish'} onChange={onChangeHandler} />
                </div>
                <label htmlFor="">Numero de tarjeta</label>
                <Input type="text" reference={inputRefCard} name="Numero de tarjeta" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />

                <div className={style.box}>
                    <div>
                        <label htmlFor="">Fecha</label>
                        <Input reference={inputRefDate} name="Fecha" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="">CVC</label>
                        <Input reference={inputRefCVC} name="CVC" styled={{ textAlign: 'center' }} onChange={onChangeHandler} />
                    </div>
                </div>
                <label htmlFor="">Teléfono</label>
                <Input type="text" name="Telefono" onChange={onChangeHandler} />
                <label htmlFor="">Whatsapp</label>
                <Input type="text" name="Whatsapp" onChange={onChangeHandler} reference={inputRefWhatsApp} />
                <div className={style.boxButton}>

                    <Button styled='buttonSecondaryGreen'>Ver Vista Cliente</Button>
                    <Button styled='buttonSecondary' click={save}>Guardar</Button>
                </div>

            </form>

        </main>


    )
}