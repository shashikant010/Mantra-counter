import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const a = document.querySelector('.box');
        const b = document.querySelector('button');
        const congo = document.querySelector('.congo');
        // let isPlaying=false;

        const handleKey = (e) => {
        if(e.key===" "){
            setCount(prevCount => {
                if(prevCount<101){
                const newCount = prevCount + 1;
                a.innerText = newCount;
                if (newCount >= 101) {
                    congo.classList.remove('hide');
                }
                return newCount;
            }});
          }
         
        };
        const handleClick=()=>{
            setCount(prevCount => {
                if(prevCount<101){
                const newCount = prevCount + 1;
                a.innerText = newCount;
                if (newCount >= 101) {
                    congo.classList.remove('hide');
                }
                return newCount;
            }});
          }
        

        document.addEventListener('keydown', handleKey);
        b.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('keydown', handleKey);
            b.removeEventListener('click', handleClick);
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

