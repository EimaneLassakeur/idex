import "./Footer.css";
import { scrollToSection } from "../../utils/scrollToSection";

import {
    Mail,
    Phone,
    MapPin
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa6";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-grid">

                    <div>

                        <img
                            src="/logo/logo-white.png"
                            alt="IDEX"
                            className="footer-logo"
                        />

                        <p>

                            وكالة رقمية متخصصة في تحويل حضورك الرقمي إلى نتائج ملموسة.

                        </p>

                        <div className="socials">

                            <a href="https://www.facebook.com/profile.php?id=61587762062307" target="_blank">

                                <FaFacebookF size={20} />

                            </a>

                            <a href="https://www.instagram.com/idex.agency.alger" target="_blank">

                                <FaInstagram size={20} />

                            </a>

                            <a href="https://www.linkedin.com/company/idex-agency">

                                <FaLinkedinIn size={20} />

                            </a>

                        </div>

                    </div>

                    <div>

                        <h3>

                            روابط

                        </h3>

                        <ul>

                            <li onClick={() => scrollToSection("hero")}>الرئيسية</li>

                            <li onClick={() => scrollToSection("about")}>من نحن</li>

                            <li onClick={() => scrollToSection("services")}>الخدمات</li>

                            <li onClick={() => scrollToSection("portfolio")}>أعمالنا</li>

                            <li onClick={() => scrollToSection("why-us")}>لماذا نحن</li>

                            <li onClick={() => scrollToSection("contact")}>اتصل بنا</li>

                        </ul>

                    </div>

                    <div>

                        <h3>

                            الخدمات

                        </h3>

                        <ul>

                            <li>تصميم المواقع</li>

                            <li>UI / UX</li>

                            <li>SEO</li>

                            <li>التسويق الرقمي</li>

                            <li>الهوية البصرية</li>

                        </ul>

                    </div>

                    <div>

                        <h3>

                            تواصل معنا

                        </h3>

                        <div className="contact-item">

                            <Phone size={18} />

                            <a href="tel:+213540717035">
                                35 70 71 540 213+
                            </a>

                        </div>

                        <div className="contact-item">

                            <Mail size={18} />

                            <a href="mailto:contact@idex.dz">
                                idex.agency@gmail.com
                            </a>

                        </div>

                        <div className="contact-item">

                            <MapPin size={18} />

                            الجزائر

                        </div>

                    </div>

                </div>

                <hr />

                <div className="copyright">

                    © 2026 IDEX. جميع الحقوق محفوظة.

                </div>

            </div>

        </footer>

    )

}

export default Footer;