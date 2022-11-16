import React, { useState } from 'react'
import './App.css';

import react from './logo.svg';
import javaScript from './assets/javaScript.png'
import HTML5 from './assets/HTML5.png'
import CSS3 from './assets/CSS3.png'
import firebase from './assets/firebase.png'
import illustrator from './assets/illustrator.png'
import photoshop from './assets/photoshop.png'
import git from './assets/git.png'

import codeImage from './assets/codeImage.jpg'
import link from './assets/link.png'
import download from './assets/download.png'
import gitHub from './assets/gitHub.png'
import twitter from './assets/twitter.png'
import linkedin from './assets/linkedin.png'

function App() {

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
    {image: codeImage, name: 'Hooters administrative panel', type: 'Web App', technologies: 'React - Firebase', Web: '//', repository: '//'},
    {image: codeImage, name: 'Hooters', type: 'Android App', technologies: 'React Native - Firebase', Web: '/', repository: '//'},
    {image: codeImage, name: 'CFE administrative panel', type: 'Web App', technologies: 'React - Firebase', Web: '//', repository: '/'},
    {image: codeImage, name: 'CFE Seguridad', type: 'Android App', technologies: 'React Native', Web: '//', repository: '//'},
    {image: codeImage, name: 'Chronos', type: 'Android App', technologies: 'React Native - Firebase', Web: 'https://play.google.com/store/apps/details?id=com.chronos.android', repository: '/'},
    {image: codeImage, name: 'Categorias Gramaticales', type: 'Web App', technologies: 'React', Web: '/', repository: '/'},
  ]

  const [formValues, setFormValues] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const UpdateFormValues = (data) => {
    const {name, value} = data.target
    setFormValues({...formValues, [name]: value})
  }

  const SendEmail = (data) => {
    data.preventDefault()
    console.log(formValues)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <header className="column">
        <div className="A"/>
        <img className="B" src={codeImage} alt={'Header Image of example code'}/>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 60,
          backgroundColor: '#383838'
        }}>
          <nav>
            <a href="#Skills"><h3>Skills</h3></a>
            <a href="#Portfolio"><h3>Portfolio</h3></a>
            <a href="#Contact"><h3>Contact</h3></a>
          </nav>
        </div>
        <div className="column" className="Title-container" style={{opacity: 0.3, backgroundColor: '#696969'}}/>
        <div className="column" className="Title-container">
          <h1>Mayevi Vásquez</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="CV">
          <img src={download} alt={'Download CV'}/>
          <p>Download CV</p>
        </div>
      </header>
      <main>
        <section id="Skills">
          <h3>Skills</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 60,
            flexBasis: 100,
            marginBottom: 50,
            marginTop: 60
          }}>
            {skills.map((skill) => (
              <div className="column" className="Skill">
                <img
                  className={skill.name == 'React' ? 'App-logo' : ''}
                  src={skill.source}
                  alt={skill.name}
                  key={skill.source}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="Portfolio">
          <h3 style={{color: '#fff'}}>Portfolio</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', flexGrow: 2, alignItems: 'center', justifyContent: 'center', gap: 15}}>
            {Proyects.map((proyecto) => (
              <article>
                <img
                  style={{height: 180, width: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15}}
                  src={proyecto.image} alt={proyecto.name}
                  key={proyecto.name}
                />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingInline: 25, paddingTop: 20}}>
                  <h4>{proyecto.name}</h4>
                  <p style={{color: '#AAA'}}>{proyecto.type}</p>
                  <p>{proyecto.technologies}</p>
                  <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 16}}>
                    <a href={proyecto.Web} style={{opacity: proyecto.Web == '/' ? 0.5 : 1}}>
                      <div className="Link-div">
                        <img src={link} alt={'Link to proyect'}/>
                        <p>Proyect</p>
                      </div>
                    </a>
                    <a href={proyecto.repository} style={{opacity: proyecto.repository == '/' ? 0 : 1}}>
                      <div className="Link-div">
                        <img src={gitHub} alt={'Link to GitHub repository'}/>
                        <p>Repository</p>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="Contact" className="column">
          <h3>Contact</h3>
          <form action="" className="column" onSubmit={(data) => SendEmail(data)}>
            <input type="email" autoComplete="email" name="email" placeholder={'Email'} required onChange={(a) => UpdateFormValues(a)}/>
            <input type="text" name="subject" placeholder={'Subject'} required onChange={(a) => UpdateFormValues(a)}/>
            <input style={{height: 80}} type="text" name="message" placeholder={'Message'} required onChange={(a) => UpdateFormValues(a)}/>
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
          <div style={{display: 'flex', alignSelf: 'center', justifyContent: 'space-between', width: 140}}>
            <a href="https://github.com/mayevi" rel="noopener noreferrer" className="link-social">
              <img style={{height: 25, width: 25}} src={gitHub} alt={'GitHub'}/>
            </a>
            <a href="https://reactjs.org" rel="noopener noreferrer" className="link-social">
              <img style={{height: 25, width: 25}} src={twitter} alt={'Twitter'}/>
            </a>
            <a href="https://www.linkedin.com/in/mayevi-vasquez-a9632518a/" rel="noopener noreferrer" className="link-social">
              <img style={{height: 25, width: 25}} src={linkedin} alt={'Linkedin'}/>
            </a>
          </div>
          <p style={{marginTop: 25}}>mayevivasquez@udetijuana.edu.mx</p>
        </section>
      </main>
      <footer>
        <p>Developed and designed by Mayevi Vasquez. ©2022. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
