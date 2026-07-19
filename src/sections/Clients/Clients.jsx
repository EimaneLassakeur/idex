import "./Clients.css";
import { motion } from "framer-motion";

const clients = [
    {
        name: "SONATRACH",
        logo: "/clients/SONATRACH.png",
    },
    {
        name: "Condor",
        logo: "/clients/Condor.png",
    },
    {
        name: "Ooredoo",
        logo: "/clients/Ooredoo.png",
    },
    {
        name: "Mobilis",
        logo: "/clients/Mobilis.png",
    },
    {
        name: "Djezzy",
        logo: "/clients/Djezzy.png",
    },
    {
        name: "Cevital",
        logo: "/clients/Cevital.png",
    },
    {
        name: "Yassir",
        logo: "/clients/Yassir.png",
    },
    {
        name: "NCA Rouiba",
        logo: "/clients/NCA Rouiba.png",
    },
];

const slider = [...clients, ...clients];

function Clients() {
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

            </div>

            <div className="clients-wrapper">

                <motion.div
                    className="clients-track"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >

                    {slider.map((client, index) => (

                        <div
                            className="client-card"
                            key={index}
                        >

                            <img
                                src={client.logo}
                                alt={client.name}
                            />

                            <h4>{client.name}</h4>

                        </div>

                    ))}

                </motion.div>

            </div>

        </section>
    );
}

export default Clients;