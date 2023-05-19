'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import style from './Select.module.css'


export default function Select({arr, name, click}) {

    const router = useRouter()

    const [select, setSelect] = useState(false)
    const [state, setState] = useState('La Paz')

    function handlerSelect () {
        setSelect(!select)
    }

    function handlerUserState (name, i) {
        setState(i)
        click(name, i)
    }



    return (

        <div className={select ? style.select : style.noSelect} onClick={handlerSelect}>
            {state} <span>{'>'}</span>
            <ul>
                {
                    arr.map((i)=> <li key={i} onClick={() => handlerUserState(name, i)}>{i}</li>)
                }
            
            </ul>
        </div>
    )
}

















// 'use client';

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation';
// import style from './Select.module.css'


// export default function Select({arr, click}) {

//     const router = useRouter()

//     const [select, setSelect] = useState(false)
//     const [state, setState] = useState('La Paz')

//     function handlerSelect () {
//         setSelect(!select)
//     }

//     function handlerUserState (data) {
//         setState(data)
//     }



//     return (

//         <div className={select ? style.select : style.noSelect} onClick={handlerSelect}>
//             {state} <span>{'>'}</span>
//             <ul>
//                 {
//                     arr.map((i)=> <li key={i} onClick={() => handlerUserState(i)}>{i}</li>)
//                 }
            
//             </ul>
//         </div>
//     )
// }