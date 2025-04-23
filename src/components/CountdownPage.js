import React, { useState, useEffect } from 'react';
import './CountdownPage.css';
import { FaFireAlt, FaArrowRight } from 'react-icons/fa';

const CountdownPage = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-04T20:00:00'); // Updated to May 4th, 2025, at 8 PM
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-container">
      <div className="sale-banner">
        <FaFireAlt className="icon" />
        <h2> Flash Sale Ends Soon!</h2>
      </div>

      <div className="timer">
        {Object.keys(timeLeft).length > 0 ? (
          <>
            <div className="time-block"><span>{timeLeft.days}</span> Days</div>
            <div className="time-block"><span>{timeLeft.hours}</span> Hours</div>
            <div className="time-block"><span>{timeLeft.minutes}</span> Minutes</div>
            <div className="time-block"><span>{timeLeft.seconds}</span> Seconds</div>
          </>
        ) : (
          <h3>Sale Ended!</h3>
        )}
      </div>
      <p className="offer-price">
          <span className="old-price">₹499</span> <span className="new-price">₹99 Only</span>
        </p> {/* Added strikethrough and new price */}
      <button className="enroll-button">
        Enroll Now <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default CountdownPage;
