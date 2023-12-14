import { Link } from "react-router-dom"
import oppImage from "../../images/cred-logo.png"
import carImage from "../../images/cars.png"
import furnImage from "../../images/furniture.png"
import "./HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <h1>HomePage</h1>
      <div className="links">
       <div className="opp-app">
          <Link to="/opportunities" style={{ textDecoration: 'none' }}>
           <div className="opp-card">
            <img className="img-opp" src={oppImage} alt="credera logo" />
            <div className="title">
              <h2 className="title-h2"> Opportunites App</h2>
              <p> Static version of the final project of my apprenticeship
                with gave Engineers the opportunity to find client roles coming up in the sales pipeline and 
                the ability to filter the open roles to their skillset and grade. The original version of this
                app was a full stake application using React, Express.js and PostgresSQL.  
              </p>
            </div>

           </div>
          </Link>
       </div>
       <div className="classic-cars">
        <a href="https://jconnollyweb.github.io/classic-responsive/" target="_blank" style={{ textDecoration: 'none '}}>
          <div className="car-card">
            <img className="car-img" src={carImage} alt="car logo" />
            <div className="title"> 
            <h2>Classic Cars Responsive</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis 
               suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>
             </div>

          </div>
        </a>

       </div>

       <div className="classic-cars">
        <a href="https://jconnollyweb.github.io/Maynooth-Furniture/" target="_blank" style={{ textDecoration: 'none '}}>
          <div className="car-card">
            <img className="furn-img" src={furnImage} alt="furn logo" />
            <div className="title"> 
            <h2>Furniture Store Responsive</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
               et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis 
               suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.  
               cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>

          </div>
        </a>

       </div>
      
      </div>
    </div>
  )
}

export default HomePage
