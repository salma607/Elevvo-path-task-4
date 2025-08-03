import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Profile from "../profile/Profile";
import Service from "../Service/Service";




export default function Home (){
    return(
        
        <section id="salma">        
        <div className="grid grid:col-5">
            
<Header/>
<Profile/>
<Service/>
<div >
    <Footer/>
</div>
        </div>
        </section>
    )
}