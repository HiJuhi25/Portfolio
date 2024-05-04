import React from 'react'
import { AiFillContacts } from 'react-icons/ai'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiTerminal, DiCode } from 'react-icons/di'
import { FaChalkboardTeacher, FaLaughBeam } from 'react-icons/fa'
import Aboutme from "../../images/Aboutme.jpg";

const personalDetails = [
  {
    label: 'Name :',
    value: 'Juhi Saha'
  },
  {
    label: 'Age :',
    value: '22'
  },
  {
    label: 'Address :',
    value: 'Kolkata, West Bengal'
  },
  {
    label: 'Email :',
    value: 'juhisaha2001@gmail.com'
  },
  {
    label: 'Contact No. :',
    value: '+91-8240620065'
  },
  {
    label: 'WhatsApp No. :',
    value: '+91-8240620065'
  },
  {
    label: 'Hobby :',
    value: 'Coding, Dancing'
  }
]

const jobSummary =
  'I am a frontend developer, passionate about crafting engaging and user-friendly digital experiences. With a blend of creativity and technical expertise, I specialize in building intuitive interfaces that seamlessly connect users with technology. My goal is to make websites and applications not just functional, but delightful to use. I thrive on the challenges of responsive design, accessibility, and performance optimization to ensure that every user interaction is smooth and impactful.'

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent
        headerText='About Me'
        icon={<AiFillContacts size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: 'translateX(-900px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <h3 className='personalInformationHeaderText'>
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__serviceWrapper'>
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <div className='about__content__serviceWrapper__innerContent'>
              <img src={Aboutme} alt='About Me' className='about__content__serviceWrapper__innerContent__image' />
            </div>
          </Animate>
        </div>
      </div>
    </section>
  )
}

export default About
