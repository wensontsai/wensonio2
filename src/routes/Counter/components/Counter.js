import React from 'react'
import PropTypes from 'prop-types'
import EndlessPlanetVid from '../assets/endless_planet.mp4'

import './Counter.scss'

export const Counter = ({ counter, increment, doubleAsync }) => (
    <div className='pageCenter'>
        <video muted autoPlay id='bgvid' src={EndlessPlanetVid} loop>
        </video>
        <div className='main'>
            <div className='bizcard'>
                <div className='row content'>
                    <div className='content'>
                        <span className='name'>Wenson Tsai</span>
                        <span className='info'>Fullstack Software Engineer / Developer / Musician</span>
                    </div>
                    <div className='links'>
                        <ul>
                            <li><a href='https://twitter.com/itswenson' target='blank'>
                                <i className='fa fa-twitter big-icon'></i></a></li>
                            <li><a href='https://github.com/wensontsai' target='blank'>
                                <i className='fa fa-github big-icon'></i></a></li>
                            <li><a href='https://linkedin.com/in/wensontsai' target='blank'>
                                <i className='fa fa-linkedin big-icon'></i></a></li>
                            <li><a href='http://hackers.wenson.io' target='blank'>
                                <i className='fa fa-newspaper-o big-icon'></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='row story'>
                    <div className='story'>
                        <p>Hi there.  Thanks for checking me out.
                        </p>
                        <p>I like creating things and working on interesting problems.  
                        </p>
                        <p>Currently, I am in the 3D-printing space (FDM/FFF), as part of an exciting community of makers, tinkerers, and new manufacturers.  I work on Toolpathing at <a href="https://www.makerbot.com/" target="blank">MakerBot Industries</a>.  Toolpathing is the processing of 3D model files into a set of machine instructions for printers to execute (think of an Etch-A-Sketch).  The final toolpath is affected by features and adjustments - producing the best print (aesthetics/structural integrity) in the best way (speed/accuracy) is usually the goal.  This allows for a lot of creativity and innovation when developing features as Toolpathing Engineers play in a sandbox where computer science, geometry, physics, robotics, sculpture, and line-art swirl together.
                        </p>
                        <p>Previous to this, I worked in the music industry writing apps that crunched serious data for all the major labels, Spotify, Apple, et al.  The software I wrote calculated and distributed royalty payments to every artist whose music is enjoyed all over the world.
                        </p>
                        <p>I like collaborating on projects.  If we can work on something, please let me know.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id='footer' className='credit'>
            Video courtesy of <a href='http://www.beeple-crap.com/'
            target='blank'>Beeple</a> under Creative Commons License
        </div>
    </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Counter
