import React from 'react'
import { FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';
import '../css/home.css'
import gif from '../css/assets/wave-hello.gif'
import useEmblaCarousel from 'embla-carousel-react'


function Home() {
    document.body.className = ''
    const [emblaRef] = useEmblaCarousel()
    return (
    
    <div>
        <div className="aboutMe">
            <h1>Hello, I'm Emre!</h1>
            <h4>Web Developer</h4>
            <p>I'm a curios Web Developer from Turkey. I'm interested with web development. Welcome to my personal website!</p>
            <img src={gif} alt="Waving Hand Gif" class="gif"/>
        </div>

        <hr class='wx5'/>

        <div className="technologies">
            <h4>Technologies I Use</h4>
            <div className="percents">
                <div className="percent">
                        <p>ReactJS</p>
                        <div className="pr"><p>Good</p><div className="prin"></div></div>
                    </div>
                    <div className="percent">
                        <p>NodeJS</p>
                        <div className="pr"><p>Good</p><div class="prin"></div></div>
                    </div>
                    <div className="percent">
                        <p>Python</p>
                        <div className="pr"><p>Basis</p> <div class="prinp"></div></div>
                    </div>
                    <div className="percent">
                        <p>PHP</p>
                        <div className="pr"><p>Good</p> <div class="prin"></div></div>
                    </div>
                        <hr class='wx6'/>
                        
                       
            </div>
        </div>
    </div>
  )
}

export default Home