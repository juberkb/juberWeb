// import React, { useState, useEffect } from 'react';

// const TypingAnimation = ({ textList, typingSpeed, delayBetweenTexts }) => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);

//   useEffect(() => {
//     const textToType = textList[currentTextIndex];

//     const interval = setInterval(() => {
//       if (isTyping) {
//         if (currentText.length < textToType.length) {
//           setCurrentText(prevText => textToType.slice(0, prevText.length + 1));
//         } else {
//           setIsTyping(false);
//           setTimeout(() => setIsTyping(true), delayBetweenTexts);
//         }
//       } else {
//         if (currentText.length > 0) {
//           setCurrentText(prevText => prevText.slice(0, -1));
//         } else {
//           setIsTyping(true);
//           setCurrentTextIndex((currentTextIndex + 1) % textList.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearInterval(interval);
//   }, [currentText, currentTextIndex, isTyping, textList, typingSpeed, delayBetweenTexts]);

//   return <div>{currentText}</div>;
// };

// export default TypingAnimation;


import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ textList, typingSpeed, delayBetweenTexts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const textToType = textList[currentTextIndex];

    const interval = setInterval(() => {
      if (isTyping) {
        if (currentText.length < textToType.length) {
          setCurrentText(prevText => textToType.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), delayBetweenTexts);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(prevText => prevText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentTextIndex((currentTextIndex + 1) % textList.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentText, currentTextIndex, isTyping, textList, typingSpeed, delayBetweenTexts]);

  return <div>{currentText}</div>;
};

export default TypingAnimation;