import { Link } from "react-router-dom";
import ein from "../assets/ein.jpg"
function Home(){
    return(
    <>
        <img src={ein} id="img"/>
        <h1>EinStino😛</h1>
        <Link to="que"><h1 className="start">Start🤜</h1></Link>
    </>
    )
    
}
export default Home;