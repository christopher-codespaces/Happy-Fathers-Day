import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typing = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Dear Dad,\n\n🌟 I want to take a moment to express my deepest gratitude.",
        "🤗 You have always been there for me, even when I didn't realize I needed you.",
        "💖 Your presence in my life is invaluable, and I'm truly blessed to have you as my father.",
        "🙏 I want to thank you for every sacrifice you've made, the weight you've lifted, and the love you've shown.",
        "💪 Your unwavering support and guidance have shaped me into who I am today.",
        "🎉 On this special day, I want to wish you a very Happy Father's Day!",
      ],
      typeSpeed: 40, // Adjust the speed as per your preference
      backSpeed: 20, // Adjust the speed as per your preference
      smartBackspace: true, // Intelligently backspaces only to fix the mistyped portion
      loop: true, // Loops the typing animation
      loopCount: Infinity, // Infinite loop
      showCursor: true, // Displays the cursor
      cursorChar: '|', // Custom cursor character
    };

    const typingElement = typingRef.current;
    const typedInstance = new Typed(typingElement, options);

    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">Happy Father's Day</h1>
      <div ref={typingRef} className="text-xl font-medium text-gray-700"></div>
    </div>
  );
};

export default Typing;
