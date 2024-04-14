
import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent'
import { skillsData } from './utils'
import { Animate,AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress';
import "./styles.scss"
import { AiOutlineAreaChart } from 'react-icons/ai'

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
        headerText='My Skills'
        icon={<AiOutlineAreaChart size={35} />}
      />
      <div className='skills__content-wrapper'>
        {skillsData.map((item, i) => (
          <div key={i} className='skills__content-wrapper__inner-content'>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >
              <h3 className='skills__content-wrapper__inner-content__category-text'>
                {item.label}
              </h3>
              <div>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={['opacity: 1', 'opacity: 0']}
                    iterationCount='1'
                  >
                    <div className='progressbar-wrapper' key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth='2'
                        strokeColor='#36A1D4'
                        trailWidth='2'
                        strokeLinecap='round'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
