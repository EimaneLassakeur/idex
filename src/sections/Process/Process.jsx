import "./Process.css";

const steps = [

    {
        number: "01",
        title: "اكتشاف المشروع",
        description: "نفهم نشاطك وأهدافك وجمهورك."
    },

    {
        number: "02",
        title: "التخطيط",
        description: "نضع استراتيجية واضحة وخطة تنفيذ."
    },

    {
        number: "03",
        title: "التصميم",
        description: "نصمم تجربة مستخدم وهوية احترافية."
    },

    {
        number: "04",
        title: "التطوير",
        description: "نحول التصميم إلى منتج سريع وحديث."
    },

    {
        number: "05",
        title: "الإطلاق",
        description: "نطلق المشروع ونراقب الأداء باستمرار."
    }

];

function Process() {

    return (

        <section className="process section">

            <div className="container">

                <div className="process-header">

                    <span className="section-tag">

                        آلية العمل

                    </span>

                    <h2 className="section-title">

                        كيف نحول فكرتك إلى نجاح؟

                    </h2>

                </div>

                <div className="steps">

                    {

                        steps.map((step, index) => (

                            <div
                                className="step-card"
                                key={index}
                            >

                                <div className="number">

                                    {step.number}

                                </div>

                                <h3>

                                    {step.title}

                                </h3>

                                <p>

                                    {step.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    )

}

export default Process;