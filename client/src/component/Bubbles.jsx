import { createContext } from "react";
import { useState } from "react";
import { useRef,useEffect } from "react";
 
export const Context = createContext();

 const ContextProvider=(props)=>{



    

    const [hit,setHit] = useState(0);
    const [score,setScore] = useState(0);
    const [time,setTime] = useState(60);
    const [bubbles,setBubbles] = useState([]);
    const [result, setResult] = useState(true);
    const [end,setEnd] = useState([]);
    
    

    const update=()=>{
        setScore((src)=>{
            return src+10;
        })
        hitVal();
        
    }
    let list1 = [];
    const intervalRef = useRef(null);
    const timeRef = useRef(time); // Initialize the ref with the initial value of 'time'

useEffect(() => {
  timeRef.current = time; // Keep the ref up-to-date whenever 'time' changes
  if(timeRef.current ===0){
    setResult(false);
    list1.push(<h4 key={""} className='end'>GAME OVER... </h4>);
    setEnd(list1);
}
}, [time]);

    const bubbleBtnVal=()=>{
        // if(timeRef.current > 0){
        let list = [];

        for(let i=0; i<108; i++){
            let bubbleVal = Math.floor(Math.random()*10)+1
          list.push(<div key={i} className='bubble-btn'  onClick={(e) => timeRef.current>0 && hit === bubbleVal && update()} >{bubbleVal}</div>);
        }
        
        setBubbles(list);
        
    // else{
    //     setResult(false);
        
    // }
    
    
    }
    
       
    const hitVal= () => {const newHit = (Math.floor(Math.random()*10)+1);
        setHit(newHit);}

    // useEffect(() => {
       
    //     bubbleBtnVal();
    // },[])
    useEffect(() => {
        hitVal();
        bubbleBtnVal();
    },[hit])


   
     const startTimer =()=>{
        if(!intervalRef.current){
         intervalRef.current = setInterval(function(){
            setTime((e)=>{
                if(e>0){
                    return (e-1);
                }
                else{
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    return 0;
                }
            })
        },1000)
        }
    };
                



    const contextValue ={
        hit,
        score,
        time,
        bubbles,
        result,
        end,
        startTimer,
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider  