import "./About.css";
import Stats from "../Stats/Stats";

function About() {

    return (

        <section id="about" className="about section">

            <div className="container about-container">

                <div className="about-image">

                    <div className="image-box">

                        <div className="orange-circle"></div>

                    </div>

                </div>

                <div className="about-content">

                    <span>

                        من نحن

                    </span>

                    <h2>

                        نقود الشركات نحو نجاح رقمي مستدام

                    </h2>

                    <p>

                        في IDEX نؤمن أن كل مشروع يستحق حضورا رقميا احترافيا.
                        نعمل على تصميم تجارب رقمية تجمع بين الإبداع والتقنية لتحقيق نتائج قابلة للقياس.

                    </p>

                    <ul>

                        <li>✓ تصميم مواقع احترافية</li>

                        <li>✓ تحسين الظهور بمحركات البحث</li>

                        <li>✓ التسويق الرقمي</li>

                        <li>✓ الهوية البصرية</li>

                    </ul>

                    {/* <button className="primary-btn">

                        اعرف المزيد

                    </button> */}

                </div>

            </div>

            <Stats />

        </section>

    )

}

export default About;