import { useState } from "react";
import "./Portfolio.css";

const projects = [

    {
        title: "منصة تجارة إلكترونية",
        category: "Web",
        image: "/images/project1.jpg"
    },

    {
        title: "هوية بصرية لشركة",
        category: "Branding",
        image: "/images/project2.jpg"
    },

    {
        title: "حملة تسويق رقمي",
        category: "Marketing",
        image: "/images/project3.jpg"
    },

    {
        title: "لوحة تحكم احترافية",
        category: "UI/UX",
        image: "/images/project4.jpg"
    },

    {
        title: "تطبيق إدارة أعمال",
        category: "Web",
        image: "/images/project5.jpg"
    },

    {
        title: "SEO لشركة محلية",
        category: "SEO",
        image: "/images/project6.jpg"
    }

];

const filters = [
    "All",
    "Web",
    "Branding",
    "Marketing",
    "SEO",
    "UI/UX"
];

function Portfolio() {

    const [active, setActive] = useState("All");

    const filtered = active === "All"
        ? projects
        : projects.filter(project => project.category === active);

    return (

        <section id="portfolio" className="portfolio section">

            <div className="container">

                <div className="portfolio-header">

                    <span className="section-tag">

                        أعمالنا

                    </span>

                    <h2 className="section-title">

                        مشاريع نفتخر بها

                    </h2>

                    <p className="section-description">

                        نصمم حلولاً رقمية تساعد الشركات على النمو
                        وتحقيق نتائج حقيقية.

                    </p>

                </div>

                <div className="filters">

                    {filters.map(filter =>

                        <button

                            key={filter}

                            className={active === filter ? "active" : ""}

                            onClick={() => setActive(filter)}

                        >

                            {filter}

                        </button>

                    )}

                </div>

                <div className="portfolio-grid">

                    {

                        filtered.map((project, index) => (

                            <div

                                className="portfolio-card"

                                key={index}

                            >

                                <img

                                    src={project.image}

                                    alt={project.title}

                                />

                                <div className="overlay">

                                    <span>

                                        {project.category}

                                    </span>

                                    <h3>

                                        {project.title}

                                    </h3>

                                    <button>

                                        عرض المشروع

                                    </button>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Portfolio;