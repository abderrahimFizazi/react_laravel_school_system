import "../../../assets/frontend/about.css"
import * as Fa from "react-icons/fa"
import * as Ai from "react-icons/ai"
import * as Bs from "react-icons/bs"
import About from "./About"
import Team from "./Team"
import Mots from "./Mots"
import Vision from "./Vision"
const AboutUs = () => {
return(
<>
<section class="text-center about" style={{"marginTop": "100px"}}>
      <h1>About US</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" >
          <span className="facebook" href="#"><Bs.BsInfoLg /></span>
            <h2>EnsatApp</h2>
            <p class="lead">5 raisons pour utiliser EnsatApp...</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn">
          <span className="twitter" href="#"><Bs.BsPeople /></span>
            <h2>Qui sommes nous ?</h2>
            <p class="lead">Maysae Hmamouchi / Abderrahim fazazi élèves ingénieurs en première année cycle ingénieur, génie informatique à l’ENSA de Tanger...</p>
          </div>
          <div class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn">
          <span className="linkedin" href="#"><Ai.AiOutlineFile /></span>
            <h2>Notre vision</h2>
            <p class="lead"> Nous visons a offrir une application web attractive et qui est capable...</p>
          </div>
        </div>
      </div>
    </section>
    <About/>
    <Team/>
    <Mots/>
    <Vision/>

</>
                       

)
}
export default AboutUs