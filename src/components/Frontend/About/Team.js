import Abdo from "../../../assets/frontend/pic/team/abdo.jpg"
import Maysa from "../../../assets/frontend/pic/team/maysa.jpg"
import Prof from "../../../assets/frontend/pic/team/prof.jpg"

const Team = () => {
    return(
        <>


	<section className="section-team">
		<div className="container">
			<div className="row justify-content-center text-center">
				<div className="col-md-8 col-lg-6">
					<div className="header-section">
						<h2 className="title">Notre équipe :</h2>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
            <div className="col-md-2 ">
				
			</div>
				<div className="col-md-4 ">
					<div className="single-person">
						<div className="person-image">
							<img src={Abdo} alt=""/>
							<span className="icon">
								<i className="fab fa-html5"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Abderrahim Fazazi</h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>
				</div>
				<div className="col-md-4 ">
					<div className="single-person">
						<div className="person-image">
							<img src={Maysa} alt=""/>
							<span className="icon">
								<i className="fab fa-js"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Maysae Hmamouchi </h3>
							<span className="speciality">Web Developer</span>
						</div>
					</div>
				</div>
                <div className="col-md-2 "></div>
                <div className="header-section text-center my-5">
						<h2 className="title">Encadré par :</h2>
					</div>
                <div className="col-md-4 ">
					<div className="single-person">
						<div className="person-image">
							<img src={Prof} alt=""/>
							<span className="icon">
								<i className="fab fa-js"></i>
							</span>
						</div>
						<div className="person-info">
							<h3 className="full-name">Ghailani Mouhamed </h3>
							<span className="speciality">Enseignant-chercheur at ENSA de Tanger</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
        </>
    )
}
export default Team