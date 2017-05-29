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
                        <p>Wenson Tsai is a Fullstack Software Engineer and Musician who spends his most
                            precious moments creating.  Whether building excitement and experiences through code,
                            product, technology, songwriting, or performance, the focus remains on next-level
                            innovation and craftsmanship.
                        </p>
                        <p>Previously, he worked in the music industry processing licenses and deals
                            for all the major players: Google, Apple, Spotify, major music labels, et al.
                            The software he wrote turned data into royalty checks for everyone whose music
                            you have ever enjoyed.
                        </p>
                        <p>Presently, he works to push model-slicing and toolpathing algorithims toward industry
                            innovation at MakerBot Industries.  He also writes the <a href='https://www.makerbot.com/print/'
                            target='blank'>desktop app</a> for 3D-printing dreams to life.
                        </p>
                        <p>Please follow his experiments <a href='http://hackers.wenson.io' target='blank'>here</a>.
                        </p>
                        <p>In another life, he was a <a href='https://www.flickr.com/photos/itswenson/'
                            target='blank'>photographer</a> who traveled and exhibited internationally.
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
