'use client';

import { useRouter } from 'next/navigation';
import style from './Input.module.css'


export default function Button({click, type, name, onChange,reference, placeholder, styled}) {

    const router = useRouter()


    function handlerButton(e) {
        e.preventDefault(e)
        router.push(click)
    }


    return (
        <input
            type={type}
            name={name}
            className={style.input}
            onChange={onChange}
            style={{...styled}}
            ref={reference}
            placeholder={placeholder}
          />
    )
}