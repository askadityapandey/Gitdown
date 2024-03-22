// IntroductionPage.js
import React from 'react';

function IntroductionPage({ onGetStarted }) {
  return (
    <div>
      <h1>Welcome to GitDown</h1>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
}

export default IntroductionPage;
