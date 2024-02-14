import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const a = document.querySelector('.box');
        const b = document.querySelector('button');
        const congo = document.querySelector('.congo');

        const handleKey = (e) => {
        if(e.key===" "){
            setCount(prevCount => {
                const newCount = prevCount + 1;
                a.innerText = newCount;
                if (newCount > 101) {
                    congo.classList.remove('hide');
                }
                return newCount;
            });
        }
        };

        document.addEventListener('keydown', handleKey);
        b.addEventListener('click', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
            b.removeEventListener('click', handleKey);
        };
    }, []);

    return (
        <>
            <div className='box'></div>
            <div className="but" style={{ margin:'30px' }}>
                <button style={{ padding:'20px', fontSize:'50px', fontWeight:'700' }}>click</button>
            </div>
            <div className='congo hide'>
               <p>Congratulations You have completed 101 repetition!!!!</p> 
            </div>
        </>
    );
}

