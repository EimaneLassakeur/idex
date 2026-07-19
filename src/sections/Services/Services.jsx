import "./Services.css";
import { scrollToSection } from "../../utils/scrollToSection";

import {
    Globe,
    Smartphone,
    Search,
    Palette,
    PenTool,
    Megaphone,
    Monitor,
    BarChart3
} from "lucide-react";

const services = [

    {
        icon: <Globe size={40} />,
        title: "تصميم المواقع",
        description: "تصميم مواقع احترافية عصرية سريعة ومتجاوبة مع جميع الأجهزة."
    },

    {
        icon: <Smartphone size={40} />,
        title: "تطوير التطبيقات",
        description: "تطوير تطبيقات ويب حديثة تساعد على نمو أعمالك."
    },

    {
        icon: <Megaphone size={40} />,
        title: "التسويق الرقمي",
        description: "حملات إعلانية ذكية تحقق نتائج فعلية وتزيد المبيعات."
    },

    {
        icon: <Search size={40} />,
        title: "SEO",
        description: "رفع ترتيب موقعك في محركات البحث وزيادة الزيارات."
    },

    {
        icon: <Palette size={40} />,
        title: "الهوية البصرية",
        description: "بناء علامة تجارية قوية تميزك عن المنافسين."
    },

    {
        icon: <PenTool size={40} />,
        title: "صناعة المحتوى",
        description: "محتوى احترافي يجذب جمهورك ويزيد التفاعل."
    },

    {
        icon: <Monitor size={40} />,
        title: "UI / UX",
        description: "تصميم واجهات وتجارب استخدام حديثة وسهلة."
    },

    {
        icon: <BarChart3 size={40} />,
        title: "تحليل البيانات",
        description: "قياس الأداء وتحويل البيانات إلى قرارات ذكية."
    }

];

function Services() {

    return (

        <section id="services" className="services section">

            <div className="container">

                <span className="section-tag">

                    خدماتنا

                </span>

                <h2 className="section-title">

                    كل ما تحتاجه لتنمية أعمالك رقمياً

                </h2>

                <p className="section-description">

                    نقدم حلولاً رقمية متكاملة تجمع بين التصميم، التطوير،
                    التسويق، وتحليل البيانات لتحقيق أفضل النتائج.

                </p>

                <div className="services-grid">

                    {services.map((service, index) => (

                        <div className="service-card" key={index}>

                            <div className="service-icon">

                                {service.icon}

                            </div>

                            <h3>

                                {service.title}

                            </h3>

                            <p>

                                {service.description}

                            </p>

                            <button
                                className="service-link"
                                onClick={() => scrollToSection("contact")}
                            >
                                اطلب الخدمة →
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Services;