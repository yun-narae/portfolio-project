import React from "react";

import about from "../assets/img/aboutme.jpg";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">port developer<br/><span>scroll down ⬇️</span></h1>
                
                <div className="intro__text">
                    <div className="text">
                        <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;