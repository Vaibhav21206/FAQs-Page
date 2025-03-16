import React, { useState } from 'react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Model United Nations?',
      answer: 'Model United Nations (MUN) is a simulation where students act as UN delegates, debating global issues and developing diplomatic skills.',
    },
    {
      question: 'I am a first-time MUN participant. What should I expect?',
      answer: 'Expect an intellectual challenge—research your country’s stance, participate actively in debates, and collaborate to propose solutions.',
    },
    {
      question: 'Is attendance taken in committee sessions?',
      answer: 'Yes, attendance is mandatory, and action may be taken against absentees.',
    },
    {
      question: 'The agenda of my committee isn’t relevant to my assigned nation. Does this mean I won’t be part of the debate?',
      answer: 'No, all delegates are encouraged to participate—integrate your country’s general policies into the debate creatively.',
    },
    {
      question: 'Do I get a participation certificate for attending the KIET MUN?',
      answer: 'Yes, all participants will receive a certificate of participation.',
    },
    {
      question: 'What commitees are being simulated at KIET MUN?',
      answer: 'The committees being simulated at KIET MUN are: United Nations General Assembly (UNGA), United Nations Human Rights Council (UNHRC), United Nations Environment Programme (UNEP), and All India Political Parties Meet (AIPPM) alongside the International Press.',
    },
    {
      question: 'Do I need prior MUN experience to participate in KIET MUN?',
      answer: 'No, KIET MUN is open to all students, regardless of their prior MUN experience.',
    },
    {
      question: 'What will be the dress code for the event?',
      answer: 'The committees would include both Traditional and Western attire, further details for the same would be communicated to the participants by the organzing team.',
    },
    {
      question: 'What is a position paper?',
      answer: 'A position paper is a statement that reveals your country’s stance on a particular topic. One paper needs to be completed for each topic in your committee.',
    },
    {
      question: 'What is caucusing?',
      answer: 'Caucusing is an informal debate that occurs during the KIET MUN conference. It serves as an important method of discussion because it allows for greater participation and consensus building. Caucusing can be either ‘moderated’ when speakers are called on by the chair after raising their placards or ‘unmoderated’, which is a designated time for delegates without the intervention of the chair to have discussion and work on resolutions.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#062045] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">FAQs</h1>

      <div className="w-full max-w-3xl space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div
              className={`flex justify-between items-center p-6 cursor-pointer transition-colors ${
                openIndex === index
                  ? 'bg-blue-50 hover:bg-blue-100'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <h2 className="text-xl font-semibold text-center flex-1 text-[#9a7e2f]">
                {item.question}
              </h2>
              <span className="text-2xl ml-4 text-[#062045]">
                {openIndex === index ? '▶' : '▼'}
              </span>
            </div>

            {openIndex === index && (
              <div className="p-6 pt-0 text-center text-[#062045]">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;