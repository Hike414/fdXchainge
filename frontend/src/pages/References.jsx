import React, { useState, useEffect } from 'react';
import infosys from '../assets/infosys.png';
import tec from '../assets/tec.png';
import linkedIn from '../assets/linkedIn.png';
import masterCard from '../assets/masterCard.png';

const references = [
  {
    title: 'Tokenised Deposit',
    link: 'https://www.linkedin.com/pulse/tokenized-deposits-pioneering-future-borderless-real-time-lohani-fgzqf/',
    thumbnail: linkedIn,
  },
  {
    title: 'Infosys About Tokenised Deposit',
    link: 'https://blogs.infosys.com/emerging-technology-solutions/blockchain-01/tokenized-deposit-a-game-changer-in-the-financial-industry.html',
    thumbnail: infosys,
  },
  {
    title: 'RBI View on TD',
    link: 'https://economictimes.indiatimes.com/tech/technology/e-rupee-push-rbi-looks-to-tokenise-government-securities-customer-deposits/articleshow/107154548.cms',
    thumbnail: tec,
  },
  {
    title: 'Mastercard on Tokenization',
    link: 'https://www.mastercard.com/news/perspectives/2024/what-is-tokenization/',
    thumbnail: masterCard,
  },
];

const References = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getVisibleReferences = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(references[(currentIndex + i) % references.length]);
    }
    return visible;
  };

  return (
    <div className="bg-gradient-to-br from-purple-950 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Evolution of Tokenized Deposits</h2>
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleReferences().map((reference, index) => (
              <div key={index} className="w-1/4 px-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center">
                  <img
                    src={reference.thumbnail}
                    alt={reference.title}
                    className="w-full h-60 object-cover rounded-md mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                    {reference.title}
                  </h3>
                  <a
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:underline text-lg"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
