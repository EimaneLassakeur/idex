import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Send
} from "lucide-react";

import "./Contact.css";

const initialState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
};

function Contact() {

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    };

    const validate = () => {

        const newErrors = {};

        if (!form.name.trim())
            newErrors.name = "يرجى إدخال الاسم";

        if (!form.phone.trim())
            newErrors.phone = "يرجى إدخال رقم الهاتف";

        if (!form.service)
            newErrors.service = "اختر نوع المشروع";

        if (!form.message.trim())
            newErrors.message = "يرجى وصف المشروع";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        const whatsappMessage = `السلام عليكم،

لدي مشروع وأرغب في الاستفسار.

----------------------------------

👤 الاسم:
${form.name}

🏢 الشركة:
${form.company || "-"}

📧 البريد الإلكتروني:
${form.email || "-"}

📱 الهاتف:
${form.phone}

💼 نوع المشروع:
${form.service}

💰 الميزانية:
${form.budget || "-"}

📝 وصف المشروع:
${form.message}

----------------------------------

تم الإرسال من موقع IDEX`;

        setTimeout(() => {

            window.open(
                `https://wa.me/213540717035?text=${encodeURIComponent(
                    whatsappMessage
                )}`,
                "_blank"
            );

            setLoading(false);

            setForm(initialState);

        }, 700);

    };

    return (

        <section
            id="contact"
            className="contact section"
        >

            <div className="container contact-grid">

                <div className="contact-info">

                    <span className="section-tag">

                        ابدأ مشروعك

                    </span>

                    <h2>

                        لنحوّل فكرتك إلى مشروع رقمي ناجح.

                    </h2>

                    <p>

                        أخبرنا عن مشروعك وسنتواصل معك في أقرب وقت عبر واتساب.

                    </p>

                    <div className="info-item">

                        <Phone />

                        <a href="tel:+213540717035">
                            35 70 71 540 213+
                        </a>

                    </div>

                    <div className="info-item">

                        <Mail />

                        <a href="mailto:contact@idex.dz">
                            idex.agency@gmail.com
                        </a>

                    </div>

                    <div className="info-item">

                        <MapPin />

                        <span>

                            الجزائر

                        </span>

                    </div>

                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="input-group">

                        <input
                            type="text"
                            name="name"
                            placeholder="الاسم الكامل *"
                            value={form.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <span className="error">
                                {errors.name}
                            </span>
                        )}

                    </div>

                    <div className="input-group">

                        <input
                            type="text"
                            name="company"
                            placeholder="اسم الشركة"
                            value={form.company}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <input
                            type="email"
                            name="email"
                            placeholder="البريد الإلكتروني"
                            value={form.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <input
                            type="text"
                            name="phone"
                            placeholder="رقم الهاتف *"
                            value={form.phone}
                            onChange={handleChange}
                        />

                        {errors.phone && (
                            <span className="error">
                                {errors.phone}
                            </span>
                        )}

                    </div>

                    <div className="input-group">

                        <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                        >

                            <option value="">
                                نوع المشروع
                            </option>

                            <option>
                                تصميم موقع إلكتروني
                            </option>

                            <option>
                                متجر إلكتروني
                            </option>

                            <option>
                                تطبيق ويب
                            </option>

                            <option>
                                الهوية البصرية
                            </option>

                            <option>
                                SEO
                            </option>

                            <option>
                                التسويق الرقمي
                            </option>

                            <option>
                                أخرى
                            </option>

                        </select>

                        {errors.service && (
                            <span className="error">
                                {errors.service}
                            </span>
                        )}

                    </div>

                    <div className="input-group">

                        <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                        >

                            <option value="">
                                الميزانية
                            </option>

                            <option>
                                أقل من 50 ألف دج
                            </option>

                            <option>
                                50 - 100 ألف دج
                            </option>

                            <option>
                                100 - 250 ألف دج
                            </option>

                            <option>
                                أكثر من 250 ألف دج
                            </option>

                        </select>

                    </div>

                    <div className="input-group">

                        <textarea
                            rows="6"
                            name="message"
                            placeholder="حدثنا عن مشروعك..."
                            value={form.message}
                            onChange={handleChange}
                        />

                        {errors.message && (
                            <span className="error">
                                {errors.message}
                            </span>
                        )}

                    </div>

                    <button
                        className="submit-btn"
                        type="submit"
                    >

                        <Send size={18} />

                        {

                            loading

                                ?

                                "جاري التحضير..."

                                :

                                "إرسال عبر واتساب"

                        }

                    </button>

                </form>

            </div>

        </section>

    );

}

export default Contact;