import "./Stats.css";

function Stats() {

    const stats = [
        { number: "250+", title: "مشروع ناجح" },
        { number: "95%", title: "رضا العملاء" },
        { number: "8+", title: "سنوات خبرة" },
        { number: "50+", title: "علامة تجارية" },
    ];

    return (
        <section className="stats section">
            <div className="container">

                <div className="stats-grid">

                    {stats.map((item, index) => (

                        <div className="stat-card" key={index}>

                            <h3>{item.number}</h3>

                            <p>{item.title}</p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;