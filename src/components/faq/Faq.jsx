import React, { useState } from 'react';
import './faq.css'

function Faq() {
  const [openIndices, setOpenIndices] = useState([]);

  const questions = [
    {
      question: 'Why Unique Codes',
      answer:
        "You might wonder, what's so special about unique codes? Well, everything! Our journey began with a simple question: 'How can we bridge the gap between the products we love and the people who want them?' The answer was ingenious yet elegantly simple - unique codes. These codes are the keys that unlock a treasure trove of products, all at your fingertips."
    },
    {
      question: 'For Influencers and Creators',
      answer:
        "If you're an influencer or content creator, Storecode is your playground for innovation. Our platform empowers you to effortlessly share your favorite products with your audience. With just a few clicks, you can transform ordinary product links into captivating, clickable experiences. Showcase your style, your passion, and your influence like never before."
    },
    {
      question: 'For Curious Shoppers',
      answer:
        "Are you tired of tedious searches for that perfect item? Say goodbye to endless scrolling and hello to efficiency. Storecode lets you explore the products you love quickly and easily. Simply enter a unique code, and voilà! You're instantly connected to the world of possibilities waiting behind that code."
    },
    {
      question: 'Our Commitment to You',
      answer:
        "At Storecode, we're not just a platform; we're a community united by a love for innovation and creativity. We're committed to delivering the best experience for both creators and shoppers. Our user-friendly interface, robust security measures, and dedication to continuous improvement ensure that your journey with us is smooth, secure, and sensational."
    }
  ];

  const handleQuestionClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className='faqSection'>
       <h2>About Storecode</h2>
      {questions.map((item, index) => (
        <div key={index} className='faqCont'>
          <div className="faqQuestion" onClick={() => handleQuestionClick(index)}>
            <div>{item.question}</div>
            <span className="dropdown-arrow">
              {openIndices.includes(index) ? '▲' : '▼'}
            </span>
          </div>
          {openIndices.includes(index) && (
            <div className="faqAnswer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
