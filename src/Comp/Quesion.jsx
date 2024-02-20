import { useRef, useState } from "react";
import question from "../quesions";
import "./App.css"
import { Link } from "react-router-dom";
function Que() {
    const [result,setresult]=useState({Attempted:0,correct:0,wrong:0})
    const [curr,setcurr]=useState(0)
    const [toggle,settoggle]=useState(true)
    const ref=useRef()
    const questions=question
    function add(i){
        console.log(i,result.correct)
        if(curr<questions.length-1){
        setcurr(curr+1)
         if(i.isCorrect){
            setresult({...result,Attempted:result.Attempted+1,correct:result.correct+1})
        }
        else{
            setresult({...result,Attempted:result.Attempted+1,wrong:result.wrong+1})
        }
        }
        else{
            ref.current.showModal()
        }
    }
    function togle(){
         settoggle(!toggle)
    }
    return(
        <div className={toggle?"black":"white"}>
        <h1 className={toggle?"bulb":"rev bulb"} onClick={togle}>💡</h1>
        <h3>{curr+1}/{question.length}</h3>
            <div className="qbox">
                <h1 className="quesion">{questions[curr].text}</h1>
                <div className="ops">
                {questions[curr].options.map((i)=>(
                    <div key={i.id} className={toggle?"op":"whiteop"} onClick={()=>{add(i)}}>
                    <p>{i.text}</p>
                    </div>
                ))}
                </div>
            </div>
                <dialog ref={ref}>
                <div>
                    <h2>Result❕</h2>
                    <h2>{((result.correct+1)/questions.length)*100}%</h2>
                    <h2>You have answered {result.correct+1} out of 5 questions correctly.</h2>
                    <div className="re">
                        <h2>Attempted:</h2>
                        <h3>{result.Attempted+1}</h3>
                    </div>
                    <div className="re"> 
                        <h2>correct</h2>
                        <h3>{result.correct+1}</h3>
                    </div>
                    <div className="re">
                        <h2>Wrong</h2>
                        <h3>{result.wrong}</h3>
                    </div>
                    <Link to={"/"}><button>Replay😎</button></Link>
                </div>
                </dialog>
        </div>

    )
    
}
export default Que;