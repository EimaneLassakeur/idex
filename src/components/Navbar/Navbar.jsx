import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { scrollToSection } from "../../utils/scrollToSection";

const navItems = [
    { label: "الرئيسية", id: "hero" },
    { label: "من نحن", id: "about" },
    { label: "الخدمات", id: "services" },
    { label: "أعمالنا", id: "portfolio" },
    { label: "لماذا نحن", id: "why-us" },
    { label: "اتصل بنا", id: "contact" }
];

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    // const scrollToSection = (id) => {

    //     const section = document.getElementById(id);

    //     if (section) {

    //         section.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start"
    //         });

    //         setMenu(false);

    //     }

    // };

    return (

        <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>

            <div className="container navbar-container">

                <div
                    className="logo"
                    onClick={() => scrollToSection("hero")}
                    style={{ cursor: "pointer" }}
                >

                    <img src="/logo/logo.png" alt="IDEX" />

                </div>

                <ul className={`nav-links ${menu ? "active" : ""}`}>

                    {navItems.map((item) => (

                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </li>

                    ))}

                </ul>

                <button
                    className="cta-btn"
                    onClick={() => scrollToSection("contact")}
                >

                    ابدأ مشروعك

                </button>

                <button
                    className="mobile-btn"
                    onClick={() => setMenu(!menu)}
                >

                    {menu ? <X size={28} /> : <Menu size={28} />}

                </button>

            </div>

        </nav>

    );

}

export default Navbar;