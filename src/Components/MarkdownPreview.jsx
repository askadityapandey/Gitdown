// MarkdownPreview.jsx
import React from 'react';

function MarkdownPreview({ content }) {
  return (
    <div>
      <h2>Markdown Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default MarkdownPreview;
