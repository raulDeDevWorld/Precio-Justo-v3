'use client'


import Image from 'next/image'
import Link from 'next/link'
import style from '../Medico.module.css'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Button from '../../../components/Button'
import { useMask } from '@react-input/mask';


export default function Home() {
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });


    return (


        <main className={style.main}>
            <form className={style.form} action="">
                <h3>Agregar Perfil</h3>
                <div className={style.perfil}>
                    <label htmlFor="file" >Subir Imagen</label>
                    <input id='file' type="file" />
                </div>
                <label htmlFor="">Nombre de la clinica</label>
                <Input type="text" />
                <label htmlFor="">Ciudad</label>

                <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} />


                <label htmlFor="">Direccion</label>
                <Input type="text" />
                <label htmlFor="">Numero de tarjeta</label>
                <Input type="text" reference={inputRefCard} styled={{ textAlign: 'center' }} />

                <div className={style.box}>
                    <div>
                        <label htmlFor="">Fecha</label>
                        <Input reference={inputRefDate} styled={{ textAlign: 'center' }} />
                    </div>
                    <div>
                        <label htmlFor="">CVC</label>
                        <Input reference={inputRefCVC} styled={{ textAlign: 'center' }} />
                    </div>
                </div>
                <label htmlFor="">Teléfono</label>
                <Input type="text" />
                <label htmlFor="">Whatsapp</label>
                <Input type="text" />
          
                <Button style='buttonSecondary'>Guardar</Button>
            </form>


        </main>


    )
}