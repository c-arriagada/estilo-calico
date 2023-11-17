import React from "react";
import NavBar from "../components/NavBar";
import Amon from "../assets/images/Amon.jpg";
import Cuixi from "../assets/images/Cuixi.jpg";
import Harley from "../assets/images/Harley.jpg";
import Ryan from "../assets/images/Ryan.jpg";
import Footer from "../components/Footer";

function AboutUs() {
    return (
        <div>
            <NavBar />
            <div className="aboutUs">
            <h1>About Us</h1>
            <article className="member-bio" id="bio-Amon">
                <img src={Amon} alt="Amon" className="member-photo" />
                <div className="bio">
                    <h2>Amon Sahelijo</h2>
                    <p>Amon has been making music for over 10 years in rock bands, jazz ensembles, and as a solo classical guitarist. He graduated from DePaul University in 2020
                        with a Bachelor’s degree in Performing Arts Management and Guitar Performance. Amon wants to support artists in today’s ever-changing, increasingly accessible music industry.
                        In addition to playing, Amon loves to help others begin their musical journey through teaching. Some of his biggest inspirations are Eric Johnson, Jimi Hendrix, and Paco de Lucía.</p>
                </div>
            </article>
            <article className="member-bio" id="bio-Cuixi">
                <img src={Cuixi} alt="Cuixi" className="member-photo" />
                <div className="bio">
                    <h2>Cuixi Aguilar</h2>
                    <p>Cuixi is a multi-instrumentalist who grew up on Chicago's South Side.
                        His passion for music began when he discovered music's special ability to bring people together and open portals to different emotions, periods in time,
                        and particular human perspectives. Cuixi brings a lot of musical diversity, from his Latin American roots, his classical guitar training at the
                        Chicago High School for the Arts and DePaul University, and his love for classic rock. While at DePaul, Cuixi ventured into new waters by fulfilling one of his lifelong
                        dreams of starting a rock band. “Where's Fernando?” played at venues like Cubby Bear, Subterranean, Martyrs, and Tonic Room.
                        Cuixi has since pursued singing/songwriting and is currently playing frontman for his latest project, “Rolling Stop”. Cuixi knows the power of music and has always
                        seen it as a tool for social change. He is very passionate about helping students find their voice and is currently doing it through the Intonation Music & School of Rock.</p>
                </div>
            </article>
            <article className="member-bio" id="bio-Harley">
                <img src={Harley} alt="Harley" className="member-photo" />
                <div className="bio">
                    <h2>Harley Gingras</h2>
                    <p>Harley Gingras is a multi-talented musician from Chicago, IL. He has been doing music since 2004, first learning the drums and quickly picking up guitar and bass.
                        10 years later in 2014, he graduated from Columbia College Chicago with a B.M. in Contemporary, Urban and Pop Music Studies. During his time studying in downtown Chicago,
                        he received professional training in music theory, piano, and voice, as well as his principal instrument the drum set, and studied under experts in the fields of Performance,
                        Songwriting, Production, and Business. Ever since then Harley has been performing, composing, producing, and teaching music of all styles, from Classical to Electronic. His most recent
                        projects include performing live and recording drums with a dub-reggae band, a blues band, and two rock bands, as well as performing with and producing an electronic kid’s-music band.
                        He has been teaching music professionally since 2010 to students of all ages, both privately and through Intonation Music Workshop in Chicago, IL, and Top Note Music Academy in Skokie, IL.</p>
                </div>
            </article>
            <article className="member-bio" id="bio-Ryan">
                <img src={Ryan} alt="Ryan" className="member-photo" />
                <div className="bio">
                    <h2>Ryan Norris</h2>
                    <p>Ryan started playing guitar at 13 years old and playing with bands in clubs by age 15. When he was 20 years old, Ryan relocated to Murfreesboro, TN to pursue a music industry degree
                        at MTSU and moved the short distance to Nashville soon after. Over 15 years in Music City, he became known as a keyboard player, multi-instrumentalist, and electronic musician.
                        Ryan was a staple on stages and in studios, and toured the world, performing in over 25 countries on four continents. He has scored films, collaborated with visual artists,
                        made music for podcasts, and worked with creatives on the bleeding edge of machine learning.</p>
                </div>
            </article>
            {/* <Footer /> */}
            </div>
        </div>
    )
}

export default AboutUs;