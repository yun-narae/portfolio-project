import React from "react";
import { portText } from "../constants"

const Port = () => {
  return (
    <section id="portfolio">
        <div className="port__inner">
            <div className="port__title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div className="port__wrap">
                {portText.map((port, key) => (
                    <article className={`port__item p${key + 1}`} key={key}>
                        <span className="num">{port.num}.</span>
                        <a 
                            href={port.code} 
                            target="_blank" 
                            className="img" 
                            rel="noreferrer noopener"
                        >
                            <img src={port.img} alt={port.name} />
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">{port.desc}</p>
                        <a 
                            href={port.view} 
                            target="_blank" 
                            className="site" 
                            rel="noreferrer noopener"
                        >
                            사이트 보기
                        </a>
                    </article>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Port;