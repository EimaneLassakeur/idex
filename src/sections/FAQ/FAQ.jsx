import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const faq = [

    {
        q: "كم يستغرق إنجاز المشروع؟",
        a: "يعتمد ذلك على حجم المشروع، لكن أغلب المواقع يتم إنجازها خلال 2 إلى 6 أسابيع."
    },

    {
        q: "هل تقدمون الدعم بعد التسليم؟",
        a: "نعم، نقدم دعماً تقنياً ومتابعة بعد إطلاق المشروع."
    },

    {
        q: "هل يمكن تحسين موقع موجود؟",
        a: "بالتأكيد، نقوم بإعادة تصميم المواقع وتحسين أدائها وتجربة المستخدم."
    },

    {
        q: "هل تقدمون خدمات SEO؟",
        a: "نعم، نقدم خدمات تحسين محركات البحث وخططاً متكاملة للنمو."
    }

];

function FAQ() {

    const [open, setOpen] = useState(0);

    return (

        <section className="faq section">

            <div className="container">

                <div className="faq-header">

                    <span className="section-tag">

                        الأسئلة الشائعة

                    </span>

                    <h2 className="section-title">

                        كل ما تحتاج معرفته

                    </h2>

                </div>

                {

                    faq.map((item, index) => (

                        <div

                            className={`faq-item ${open === index ? "active" : ""}`}

                            key={index}

                        >

                            <button

                                className="faq-question"

                                onClick={() => setOpen(open === index ? -1 : index)}

                            >

                                <span>{item.q}</span>

                                <ChevronDown />

                            </button>

                            <div className="faq-answer">

                                <p>{item.a}</p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default FAQ;