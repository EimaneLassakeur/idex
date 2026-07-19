import "./ScrollTop.css";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setVisible(window.scrollY > 500)

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <button

            className={`scroll-top ${visible ? "show" : ""}`}

            onClick={() => window.scrollTo({

                top: 0,

                behavior: "smooth"

            })}

        >

            <ArrowUp />

        </button>

    )

}

export default ScrollTop;