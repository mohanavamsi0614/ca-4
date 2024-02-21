import { useRef, useState } from "react";
import question from "../quesions";
import "./App.css"
import { Link } from "react-router-dom";
function Que() {
    const [result,setresult]=useState(0)
    const [curr,setcurr]=useState(0)
    const [high,sethigh]=useState(false)
    const [toggle,settoggle]=useState(true)
    const ref=useRef()
    function call(){
        ref.current.showModal()
    }
    const questions=question
    function add(i){
        if(curr<questions.length-1){
            setcurr(curr+1)

        if(i.isCorrect){
            setresult((pre)=>pre+1)
        }
        }
        else if (curr==questions.length-1 && i.isCorrect){
            setresult(result+1)
            call()
        }
        else{
            call()
        }

        console.log(i,result)

    }
    function togle(){
         settoggle(!toggle)
         if (toggle){
         document.body.style.backgroundColor="#e7dcdc"
        }
        else{
            document.body.style.backgroundColor="#1B1B1B"
        }
    }
    return(
        <div className={toggle?"black":"white"}>
        <h1 className={toggle?"bulb":"rev bulb"} onClick={togle}>💡</h1>
        <h3>{curr+1}/{question.length}</h3>
            <div className="qbox">
                <h1 className={high?"high quesion": "quesion"}>{questions[curr].text}</h1>
                <div className="ops">
                {questions[curr].options.map((i)=>(
                    <div key={i.id} className={toggle?"op":"whiteop"} onClick={()=>{add(i)}}>
                    <p>{i.text}</p>
                    </div>
                ))}
                </div>
                <div className="hi">
                <button className="highlet" onClick={()=>sethigh(true)}>Highlet</button>
                <button className="remove" onClick={()=>sethigh(false)}>Remove Highlet</button>
                </div>
            </div>
                <dialog ref={ref}>
                <div>
                    <h2>Result❕</h2>
                    <h2>{((result)/questions.length)*100}%</h2>
                    <h2>{result} out of 5 correct.</h2>
                    <Link to={"/"}><button>Replay😎</button></Link>
                </div>
                </dialog>
        </div>

    )
    
}
export default Que;