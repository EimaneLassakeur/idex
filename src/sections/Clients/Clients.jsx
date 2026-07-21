import "./Clients.css";
import { useRef } from "react";

const clients = [
    "SONATRACH",
    "Condor",
    "Ooredoo",
    "Mobilis",
    "Djezzy",
    "Cevital",
    "Yassir",
    "NCA Rouiba"
];

function Clients() {

    const slider = useRef(null);

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {

        isDown = true;

        slider.current.classList.add("dragging");

        startX = e.pageX - slider.current.offsetLeft;

        scrollLeft = slider.current.scrollLeft;

    };

    const mouseLeave = () => {

        isDown = false;

        slider.current.classList.remove("dragging");

    };

    const mouseUp = () => {

        isDown = false;

        slider.current.classList.remove("dragging");

    };

    const mouseMove = (e) => {

        if (!isDown) return;

        e.preventDefault();

        const x = e.pageX - slider.current.offsetLeft;

        const walk = (x - startX) * 2;

        slider.current.scrollLeft = scrollLeft - walk;

    };

    return (

        <section className="clients section" id="clients">

            <div className="container">

                <div className="clients-title">

                    <h2>شركاء النجاح</h2>

                    <p>
                        نفخر بثقة عملائنا وشركائنا الذين اختاروا IDEX
                        لمرافقتهم في رحلتهم نحو النجاح الرقمي.
                    </p>

                </div>

                <div

                    ref={slider}

                    className="clients-slider"

                    onMouseDown={mouseDown}

                    onMouseLeave={mouseLeave}

                    onMouseUp={mouseUp}

                    onMouseMove={mouseMove}

                >

                    {clients.map((client, index) => (

                        <div

                            className="client-card"

                            key={index}

                        >

                            <img

                                src={`/clients/${client}.png`}

                                alt={client}

                            />

                            <h4>{client}</h4>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Clients;