import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import pic from './images/pic.png'; 
import { BiLogoGithub , BiLogoLinkedinSquare } from 'react-icons/bi';

const Home = () => {
  return (
    <div>
      <Animate
        play
        duration={1.5}
        start={{
          transform: 'rotateY(-90deg)' // Initial rotation (off-screen)
        }}
        end={{
          transform: 'rotateY(0deg)' // Final rotation (to normal)
        }}
      >
        <div className='home__image-wrapper'>
          <img src={pic} alt='Profile Pic' className='home__image' />
        </div>
      </Animate>
      <section id='home' className='home'>
        <div className='home__text-wrapper'>
          <h1>
            Hello! I'm Juhi Saha
            <br />A Frontend Developer
          </h1>
        </div>
      </section>

      {/* Animate component */}
      <Animate
        play
        duration={1.5}
        start={{
          transform: 'translateY(550px)' // Initial position (off-screen)
        }}
        end={{
          transform: 'translateY(0px)' // Final position (centered vertically)
        }}
      >
        <br />
        <br />
        <br />
        <div className='home__contact-me'>
          {/* Updated Link to use mailto: URI scheme */}
          <a href='mailto:juhisaha2001@gmail.com'>
            <button>Contact Me</button>
          </a>
          <Link
            to='https://drive.google.com/file/d/1Dw4WClVLgoLOFsYG5N-kr5jEYoSwV2iB/view?usp=sharing'
          >
            <button>Resume</button>
          </Link>
        </div>
        <br/>
        <br/>
        <div className='home__contact-icons'>
        <Link to={'https://github.com/HiJuhi25/'}><BiLogoGithub size={40} style={{ marginLeft: '10px' }} /></Link>
          <Link to={'https://www.linkedin.com/in/juhi-saha-438288243/'}><BiLogoLinkedinSquare size={40} style={{ marginLeft: '10px' }} /></Link>
        </div>
      </Animate>
    </div>
  );
};

export default Home;
