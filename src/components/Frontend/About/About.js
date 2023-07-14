import { Link } from "react-router-dom"

const About = () => {
    return (
        <section className="page-section bg-primary" id="about">
            <div className="container px-2 px-lg-5">
                <div className="row gx-4 gx-lg-5 ">
                    <div className="col-md-4 text-center">
                        <h1 className="text-white mt-0">EnsatApp</h1>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">Notre Slogan ici </p>
                    </div>
                    <div className="col-md-8 justify-content-center ">
                        <h3 className="text-white mb-3">
                            Pourquoi cette plateforme ?
                        </h3>
                        <ol className="text-white-75">
                            <li>Un espace pour le cadre administratif de l'ENSAT afin de gérer les informations des étudiants.</li>
                            <li>Un espace pou les chefs de filières pour saisir les notes des étudiants et les délibérations.</li>
                            <li>Un espace pour les étudiants afin de consulter leur profils scolaires et leurs notes.</li>
                            <li>Un espace pour permetre au etudiants de conatcter leurs chef de filieres.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About

