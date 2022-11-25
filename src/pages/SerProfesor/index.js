import React from 'react'
import Button from '../../components/Button'
import './styles.css'
import studentImage from './studentImage.jpg'
import {ReactComponent as ReactLogo} from "./airbnb.svg"
import serProfesor from './serProfesor.jpg'

function SerProfesor() {

  const backgroundImageStyle={
    backgroundImage:`url("${studentImage}")`,
    backgroundSize:"cover",

  }

  const backgroundImageStyle2={
    backgroundImage:`url("${serProfesor}")`,
    backgroundSize:"cover",
    height:"auto"
  }

  return (
    <div className="App">
      <div className='elementsContainer' style={backgroundImageStyle}>
          <div className='mainElements'>
            <div className='logo_div'>
              <ReactLogo className='logo'/>
            </div>
            <h2 className='secondTitle'>Become a host</h2>
            <h1 className="mainTitle">
              Host your space, share your world
            </h1>
            <p className='mainParagraph'>
              The art of hosting is rooted in thoughtful design. Share your
              unique aesthetic with guests and earn extra income on a schedule
              that works for you.
            </p>
            <Button>
              Try hosting
            </Button>
          </div>
      </div>
    
      <div className='secondSection'>
        <div className='secondSection__container'>
          <h2 className='secondSection__title'>
            Your next chapter, made possible by Hosting
          </h2>
        </div>
      
      
      <div className='thirdSection'>
        <div className='thridSection__container'>
          <h3 className='thirdSection__title'>Share what you love</h3>
          <p className='thirdSection__text'>
            Indulge your love for design when you host Airbnb guests, who are
            drawn to authentic travel in creatively curated spaces.
          </p>
        </div>
      
        <div className='thridSection__container'>
          <h3 className='thirdSection__title'>Host how you want to</h3>
          <p className='thirdSection__text'>
            Airbnb gives you the tools and support to earn extra income, be
            your own boss and invest in your passions.
          </p>
        </div>
      </div>
      </div>
      <div className='contenedores'>
        <div className='contenedores__div'>
        Ayudá a brindar hospedaje a 100 000 personas refugiadas ucranianas
        <div className='contenedores__button'>
          <a>Mas informacion</a>
        </div>
        </div>
      </div>

      <div className='contenedores' style={backgroundImageStyle2}>
        <div className='contenedores__div'>
          ¿Tenés dudas sobre cómo hospedar?
          Preguntale a un Superanfitrión.
        <div className='contenedores__button'>
          <a>Mas informacion</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SerProfesor