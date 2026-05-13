import { useEffect, useState } from "react";

export default function Counters() {
  const stats = [
    { label: "Cars Sourced", target: 1200 },
    { label: "Clients Helped", target: 850 },
    { label: "Deals Negotiated", target: 500 },
    { label: "Nationwide Partners", target: 100 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          count < stats[i].target
            ? count + Math.ceil(stats[i].target / 100)
            : stats[i].target,
        ),
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="counters"
      style={{
        padding: "60px 20px",
        background: "var(--black)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--gold)", fontSize: "4rem" }}>
        Our Achievements
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px",
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ flex: "1 1 200px", color: "var(--white)" }}>
            <h3 style={{ fontSize: "4rem", color: "var(--gold)" }}>
              {counts[i]}
            </h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
