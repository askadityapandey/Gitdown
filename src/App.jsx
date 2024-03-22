import React, { useState } from 'react';
import IntroductionPage from './Components/IntroductionPage';
import InputField from './Components/InputField';
import Button from './Components/Button';
import MarkdownPreviewContainer from './Components/MarkdownPreviewContainer';
import './App.css'; // Import CSS file

function App() {
  const [showInputPage, setShowInputPage] = useState(false);
  const [markdown, setMarkdown] = useState('');

  const handleGetStarted = () => {
    setShowInputPage(true);
  };

  const handleGenerateMarkdown = (generatedMarkdown) => {
    setMarkdown(generatedMarkdown);
  };

  const fields = [
    { name: 'projectTitle', label: 'Project Title' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'installation', label: 'Installation', type: 'textarea' },
    { name: 'usage', label: 'Usage', type: 'textarea' },
    { name: 'contributing', label: 'Contributing', type: 'textarea' },
    { name: 'license', label: 'License' },
    // Add more fields as needed
  ];

  return (
    <div>
      {showInputPage ? (
        <div className="input-container">
          <InputField fields={fields} onGenerateMarkdown={handleGenerateMarkdown} />
          {/* <Button onClick={() => {}}>Submit</Button> */}
         
        </div>
      ) : (
        <IntroductionPage onGetStarted={handleGetStarted} />
      )}
      {/* Render Markdown content outside the yellow line box */}
      {markdown && <div className="markdown-content">{markdown}</div>}
    </div>
  );
}

export default App;
