import React, { useState, useEffect } from 'react'
import react from './logo.svg';
import './App.css';
import codeImage from './assets/codeImage.jpg'
import javaScript from './assets/javaScript.png'
import HTML5 from './assets/HTML5.png'
import CSS3 from './assets/CSS3.png'
import firebase from './assets/firebase.png'
import illustrator from './assets/illustrator.png'
import photoshop from './assets/photoshop.png'
import link from './assets/link.png'
import git from './assets/git.png'
import gitHub from './assets/gitHub.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'
import download from './assets/download.png'

function App() {

    const [windowDimenion, detectHW] = useState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  
    const detectSize = () => {
      detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    }
  
    useEffect(() => {
      window.addEventListener('resize', detectSize)

      return () => {
        window.removeEventListener('resize', detectSize)
      }
    }, [windowDimenion])

    const skills = [
      {source: javaScript, name: 'Javascript'},
      {source: HTML5, name: 'Html5'},
      {source: CSS3, name: 'Css3'},
      {source: git, name: 'Git'},
      {source: react, name: 'React'},
      {source: firebase, name: 'Firebase'},
      {source: illustrator, name: 'Illustrator'},
      {source: photoshop, name: 'Photoshop'}
    ];

    const Proyects = [
      {image: codeImage, name: 'Hooters', type: 'Android App', technologies: 'React Native', Web: '..', repository: '//'},
      {image: codeImage, name: 'CFE', type: 'Android App', technologies: 'React Native', Web: '..', repository: '//'},
      {image: codeImage, name: 'Tomin', type: 'Web', technologies: 'React Native', Web: '..', repository: '//'},
    ]

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          display: 'flex',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: windowDimenion.winHeight,
          opacity: 0.25,
          backgroundColor: '#000'
        }}></div>
        <img style={{width: '100%', height: windowDimenion.winHeight}} src={codeImage} alt={'Code'}/>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 60,
          backgroundColor: '#383838'
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 300,
            marginRight: '10%'
          }}>
            <a href="#Skills"><h4 style={{fontSize: 18, color: '#fff'}}>Skills</h4></a>
            <a href="#Portfolio"><h4 style={{fontSize: 18, color: '#fff'}}>Portfolio</h4></a>
            <a href="#Contact"><h4 style={{fontSize: 18, color: '#fff'}}>Contact</h4></a>
          </nav>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: windowDimenion.winHeight / 2 - 75,
          width: 430,
          height: 150,
          borderRadius: 5,
          opacity: 0.3,
          backgroundColor: '#696969'
        }}>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          height: 35,
          top: windowDimenion.winHeight / 2 - 30
        }}>
          <h1 style={{fontWeight: 'lighter', fontSize: 40, height: 18}}>Mayevi Vásquez</h1>
          <h2 style={{fontWeight: 'medium', fontSize: 24, letterSpacing: 2.5, height: 15}}>Frontend Developer</h2>
        </div>
      </header>
      <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
        <section id="Skills">
          <h4 style={{fontWeight: 'bold', fontSize: 30, color: '#383838', marginTop: 50, marginBottom: 60}}>Skills</h4>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '10%',
            marginRight: '10%',
            marginBottom: 50,
            marginTop: 0
          }}>
            {skills.map((skill) => (
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 120}}>
                <img
                  style={{height: 100}}
                  className={skill.name == 'React' ? 'App-logo' : ''}
                  src={skill.source}
                  alt={skill.name}
                  key={skill.source}
                />
                <h5 style={{fontSize: 18, marginTop: 5}}>{skill.name}</h5>
              </div>
            ))}
          </div>
        </section>
        <section id="Portfolio" style={{width: '100%', backgroundColor: '#383838', flexDirection: 'column', alignItems: 'space-between'}}>
          <h4 style={{fontWeight: 'bold', fontSize: 30, color: '#fff'}}>Portfolio</h4>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '10%',
            marginRight: '10%',
            marginBottom: 50,
          }}>
            {Proyects.map((proyecto) => (
              <article style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: 330,
                backgroundColor: '#F6F6F6',
                borderRadius: 15,
              }}>
                <img
                  style={{height: 180, width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15}}
                  src={proyecto.image} alt={proyecto.name}
                  key={proyecto.name}
                />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 25}}>
                  <p style={{fontSize: 18, marginBottom: 4, fontWeight: 'bold', marginTop: 0}}>{proyecto.name}</p>
                  <p style={{fontSize: 14, marginBottom: 4, marginTop: 0}}>{proyecto.type}</p>
                  <p style={{fontSize: 14, marginBottom: 4, marginTop: 0}}>{proyecto.technologies}</p>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <img style={{height: 23, width: 23, marginRight: 5}} src={link} alt={'Link to proyect'}/>
                      <p style={{fontSize: 14}}>Proyect</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                      <img style={{height: 23, width: 23, marginRight: 5}} src={gitHub} alt={'Link to GitHub repository'}/>
                      <p style={{fontSize: 14}}>Repository</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 220,
            height: 45,
            marginBottom: 50,
            borderRadius: 5,
            backgroundColor: '#8E9775',
            marginLeft: '10%'
          }}>
            <img style={{height: 22, width: 22, marginRight: 8}} src={download} alt={'Download CV'}/>
            <p style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Download CV</p>
          </div>
        </section>
        <section id="Contact" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <h4 style={{fontWeight: 'bold', fontSize: 30, color: '#383838'}}>Contact</h4>
          <form action="" style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
            <label for="Email">
              <input className="App-input" id="Email" type="email" name="Email" autoComplete="email" placeholder={'Email'} required></input>
            </label>
            <label for="Sujeto">
              <input className={"App-input"} id="Sujeto" type="text" name="Subject" placeholder={'Subject'} required></input>
            </label>
            <label for="Message">
              <input
                style={{height: 70, borderWidth: 4, borderColor: '#8E9775', borderRadius: 8, paddingLeft: 10, width: 350}}
                id="Message"
                type="text"
                name="Message"
                placeholder={'Message'}
                required>
              </input>
            </label>
            <input
              type="submit"
              value="Send Message"
              style={{
                height: 40,
                backgroundColor: '#8E9775',
                color: '#fff',
                borderRadius: 8,
                borderWidth: 0,
                marginBottom: 80,
                marginTop: 10,
                fontWeight: 'bold'
              }}>
            </input>
          </form>
          <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: 140}}>
            <a className="App-link" href="https://github.com/mayevi" target="_blank" rel="noopener noreferrer">
              <img style={{height: 25, width: 25}} src={gitHub} alt={'GitHub'}/>
            </a>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img style={{height: 25, width: 25}} src={twitter} alt={'Twitter'}/>
            </a>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/mayevi-vasquez-a9632518a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img style={{height: 25, width: 25}} src={linkedin} alt={'Linkedin'}/>
            </a>
          </div>
          <p style={{fontSize: 16, alignSelf: 'center', marginTop: 25, marginBottom: 60}}>mayevivasquez@udetijuana.edu.mx</p>
        </section>
      </main>
      <footer>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          height: 80,
          marginBottom: 0,
          backgroundColor: '#CBD9A7'
        }}>
          <p style={{fontSize: 16, marginLeft: '10%'}}>Developed and designed by Mayevi Vasquez. ©2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
