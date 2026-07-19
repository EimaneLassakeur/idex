import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { scrollToSection } from "../../utils/scrollToSection";

import "./Hero.css";

function Hero() {
    return (
        <section id="hero" className="hero section">
            <HeroBackground/>
            <div className="container hero-container">

                <div className="hero-content">

                    <span className="hero-badge">
                        وكالة رقمية جزائرية
                    </span>

                    <h1>
                        نحول حضورك الرقمي
                        <span> إلى نتائج ملموسة</span>
                    </h1>

                    <p>
                        نساعد الشركات والعلامات التجارية على النمو
                        عبر تصميم مواقع احترافية واستراتيجيات
                        تسويق رقمية تحقق نتائج حقيقية.
                    </p>

                    <div className="hero-buttons">

                        <button 
                            className="primary-btn"
                            onClick={() => scrollToSection("contact")}
                        >    
                            ابدأ مشروعك
                        </button>

                        {/* <button className="secondary-btn">
                            تعرف علينا
                        </button> */}

                    </div>

                </div>

                <div className="hero-visual">

                    <motion.div
                        animate={{
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity
                        }}
                        className="floating-card"
                    >
                        +250 مشروع
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 25, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity
                        }}
                        className="floating-card second"
                    >
                        95% رضا العملاء
                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Hero;