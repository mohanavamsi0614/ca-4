import { Link } from "react-router-dom";
import ein from "../assets/ein.jpg"
function Home(){
    return(
    <>
{/*         this for image */}
        <img src={ein} id="img"/>
        <h1>EinStino😛</h1>
{/*         defined a route for go to quiz  */}
        <Link to="que"><h1 className="start">Start🤜</h1></Link>
    </>
    )
    
}
export default Home;
