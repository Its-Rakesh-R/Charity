import { useEffect } from "react";
import Caroselhome from "./carousel";
import Feed from "./feed";
import Footer from "./footer";
import './home.css';
import Occasion from "./occasion";
import Sponser from "./sponser";


function Home(){
    

    return<div className="padd ">
        <Caroselhome />
        <Feed/>
        <Occasion/>
        <Sponser/>
        <Footer/>
    </div>
}
export default Home