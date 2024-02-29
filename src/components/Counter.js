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
                if(prevCount<108){
                const newCount = prevCount + 1;
                a.innerText = newCount;
                if (newCount >= 108) {
                    congo.classList.remove('hide');
                }
                return newCount;
            }});
          }
         
        };

        const handleClick=()=>{
                var recognition = new window.webkitSpeechRecognition();
                recognition.lang="en-GB";
                document.querySelector(".but p").innerHTML+="<br>I am Listening"
                recognition.onresult=(evt)=>{
                    let result=evt.results[0][0].transcript;
                    console.log(result);
                    console.log(result[0]+result[1]);
                    if(result[0]+result[1]==="Om"||result[0]+result[1]==="ओम"){
                        setCount(prevCount => {
                            if(prevCount<108){
                            const newCount = prevCount + 1;
                            a.innerText = newCount;
                            if (newCount >= 108) {
                                congo.classList.remove('hide');
                            }
                            return newCount;
                        }});
                    }
                }
                recognition.start();
                recognition.onend=()=>{
                    recognition.start(); 
                }
            


            // setCount(prevCount => {
            //     if(prevCount<108){
            //     const newCount = prevCount + 1;
            //     a.innerText = newCount;
            //     if (newCount >= 108) {
            //         congo.classList.remove('hide');
            //     }
            //     return newCount;
            // }});
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
            <p>Read the matra 108 times to get your wishes fulfilled</p>
                <button style={{ padding:'20px', fontSize:'50px', fontWeight:'700' }}>click to Start</button>
                <p>click the button to increase count</p>
            </div>
            <div className='congo hide'>
               <p>Congratulations You have completed 108 repetition!!!!</p> 
            </div>
        </>
    );
}

