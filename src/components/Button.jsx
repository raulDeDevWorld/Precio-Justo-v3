'use client';

import style from './Button.module.css'


export default function Button({styled, click, children}) {

    return (
        <button
            className={`${style.button} ${style[styled]}`}
            onClick={click}
            >
            {children}
        </button>
    )
}