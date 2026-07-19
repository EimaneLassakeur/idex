import "./WhyChoose.css";

import {
    ShieldCheck,
    Sparkles,
    Users,
    BarChart3,
    Headphones
} from "lucide-react";

const reasons = [

    {
        icon: <Sparkles size={36} />,
        title: "حلول مخصصة",
        description:
            "كل مشروع يتم تصميمه خصيصًا ليتوافق مع أهداف نشاطك."
    },

    {
        icon: <Users size={36} />,
        title: "فريق محترف",
        description:
            "مصممون ومطورون ومسوقون يعملون معًا لتحقيق أفضل النتائج."
    },

    {
        icon: <BarChart3 size={36} />,
        title: "نتائج قابلة للقياس",
        description:
            "نعتمد على البيانات والتحليلات لضمان نمو أعمالك."
    },

    {
        icon: <Headphones size={36} />,
        title: "دعم مستمر",
        description:
            "نبقى بجانبك بعد إطلاق المشروع لضمان النجاح."
    },

    {
        icon: <ShieldCheck size={36} />,
        title: "جودة عالية",
        description:
            "نهتم بأدق التفاصيل لنقدم تجربة رقمية احترافية."
    }

];

function WhyChoose() {

    return (

        <section id="why-us" className="why section">

            <div className="container">

                <div className="why-header">

                    <span className="section-tag">

                        لماذا IDEX ؟

                    </span>

                    <h2 className="section-title">

                        شريكك الرقمي نحو النجاح

                    </h2>

                </div>

                <div className="timeline">

                    {

                        reasons.map((item, index) => (

                            <div
                                className="timeline-item"
                                key={index}
                            >

                                <div className="timeline-dot">

                                    {item.icon}

                                </div>

                                <div className="timeline-content">

                                    <h3>

                                        {item.title}

                                    </h3>

                                    <p>

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default WhyChoose;