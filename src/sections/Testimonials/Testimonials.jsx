import "./Testimonials.css";
import { Star } from "lucide-react";

const testimonials = [

    {
        name: "محمد أمين",
        company: "شركة البناء الحديثة",
        image: "/images/client1.jpg",
        review:
            "تعامل احترافي جداً، الفريق فهم احتياجاتنا وقدم موقعاً ساهم في زيادة طلبات العملاء بشكل ملحوظ."
    },

    {
        name: "سارة بن يوسف",
        company: "متجر إلكتروني",
        image: "/images/client2.jpg",
        review:
            "أفضل تجربة تعامل مع وكالة رقمية. التصميم رائع والدعم كان سريعاً بعد إطلاق المشروع."
    },

    {
        name: "أحمد خالد",
        company: "Startup DZ",
        image: "/images/client3.jpg",
        review:
            "ساعدونا في بناء الهوية البصرية والموقع الإلكتروني وكانت النتائج أفضل مما توقعنا."
    }

];

function Testimonials() {

    return (

        <section className="testimonials section">

            <div className="container">

                <div className="testimonials-header">

                    <span className="section-tag">

                        آراء العملاء

                    </span>

                    <h2 className="section-title">

                        ماذا يقول عملاؤنا؟

                    </h2>

                    <p className="section-description">

                        نفخر بثقة عملائنا، ونسعى دائماً لتقديم نتائج تتجاوز توقعاتهم.

                    </p>

                </div>

                <div className="testimonial-grid">

                    {

                        testimonials.map((item, index) => (

                            <div
                                className="testimonial-card"
                                key={index}
                            >

                                <div className="testimonial-top">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>

                                        <h3>

                                            {item.name}

                                        </h3>

                                        <p>

                                            {item.company}

                                        </p>

                                    </div>

                                </div>

                                <div className="stars">

                                    {

                                        Array.from({ length: 5 }).map((_, i) =>

                                            <Star
                                                key={i}
                                                size={18}
                                                fill="#FB8928"
                                                color="#FB8928"
                                            />

                                        )

                                    }

                                </div>

                                <p className="review">

                                    "{item.review}"

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Testimonials;