import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does CarFinders SA help me find a car?",
      answer:
        "We source vehicles nationwide, compare deals, and negotiate with trusted dealerships to secure the best option for you.",
    },
    {
      question: "Do you assist with vehicle finance?",
      answer:
        "Yes, we connect clients with trusted finance partners to make vehicle ownership more accessible and convenient.",
    },
    {
      question: "Can you help me trade in my current vehicle?",
      answer:
        "Absolutely. We simplify the trade-in process and ensure you get fair value for your vehicle.",
    },
    {
      question: "Is your service available across South Africa?",
      answer:
        "Yes, we work with dealerships nationwide to help you find your perfect match.",
    },
    {
      question: "What makes CarFinders SA different?",
      answer:
        "We provide a luxury, stress-free customer experience with professional support and better deal negotiation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{ padding: "60px 20px", background: "var(--charcoal)" }}
    >
      <h2>Frequently Asked Questions</h2>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <div
              onClick={() => toggleFAQ(i)}
              style={{
                cursor: "pointer",
                background: "var(--black)",
                padding: "15px",
                borderRadius: "6px",
                color: "var(--gold)",
              }}
            >
              {faq.question}
            </div>
            {openIndex === i && (
              <div
                style={{
                  background: "var(--soft-gold)",
                  padding: "15px",
                  borderRadius: "6px",
                  marginTop: "5px",
                  color: "var(--black)",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
