import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What does this portfolio contain?",
      answer:
        "The portfolio includes an overview of the individual behind the work, professional background, and career objectives presented in a structured About section.",
    },
    {
      question: "Are project documentations included?",
      answer:
        "Yes. The portfolio provides detailed documentation of projects, showcasing methodologies, tools, and outcomes that highlight technical and creative expertise.",
    },
    {
      question: "Is a Curriculum Vitae (CV) available?",
      answer:
        "A dedicated section is included for the CV, allowing quick access and direct download of professional resumes.",
    },
    {
      question: "What about creative or complementary work?",
      answer:
        "The portfolio features complementary skills and a gallery that highlights design assets, creative work, and additional resources.",
    },
    {
      question: "Is there a way to get in touch?",
      answer:
        "A Contact section is provided with professional links and channels to facilitate collaboration and communication.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto my-[100px] p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-dark-purple mb-6 text-center">
        Portfolio Overview
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-lg text-gray-800 hover:bg-gray-50"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-purple-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-600" />
              )}
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 bg-gray-50 text-gray-700 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFAQ;
