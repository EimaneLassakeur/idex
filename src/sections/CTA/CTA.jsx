import "./CTA.css";
import { scrollToSection } from "../../utils/scrollToSection";

function CTA() {

    return (

        <section className="cta section">

            <div className="container">

                <h2>

                    جاهز لتنمية أعمالك؟

                </h2>

                <p>

                    لنحوّل فكرتك إلى مشروع رقمي احترافي.

                </p>

                <div className="cta-buttons">

                    <button 
                        className="primary-btn"
                        onClick={() => scrollToSection("contact")}
                    >

                        تواصل معنا

                    </button>

                    {/* <button className="secondary-btn">

                        تواصل معنا

                    </button> */}

                </div>

            </div>

        </section>

    )

}

export default CTA;