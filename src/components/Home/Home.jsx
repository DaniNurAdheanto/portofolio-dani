import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import ScrollMarquee from '../scrollmarquee/ScrollMarquee';

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grip">
                    <Social />

                    <div className="home_img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
            <ScrollMarquee texts={["Crafting Digital Experiences", "Available for Freelance" , "Let's Collaborate"]} speed={20} />
        </section>
    )
}

export default Home