import  react, { useContext } from 'react';
import './Main.css'
import Bubble from './Bubbles';
import { Context } from './Bubbles';
 
export default function Main(){
    const {hit,time,bubbles,score,result,end,startTimer} = useContext(Context);


    


    return(
        <div className="main">
        <div className='pannel'> 
            <div className="hit">
                <h4>HIT</h4>
                <div id="hit-val" className='style'>
                    <p>{hit}</p>
                </div>
            </div>
            <div className="score">
                <h4>SCORE</h4>
                <div id="score-val"className='style'>
                    <p>{score}</p>
                </div>
            </div>
            <div className="time">
                <h4>TIME</h4>
                <div id="time-val" className='style'>
                    <p>{time}</p>
                </div>
            </div>
            <div>
                <button onClick={startTimer}>START</button>
            </div>
        </div>

        <div className="bubbles">
           {result?bubbles:end}
        </div> 
        </div>
    );
}