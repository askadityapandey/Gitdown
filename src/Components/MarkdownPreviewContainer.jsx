import React from 'react';
import MarkdownPreview from './MarkdownPreview';

function MarkdownPreviewContainer({ markdownContent }) {
  return (
    <div>
      <MarkdownPreview content={markdownContent} />
    </div>
  );
}

export default MarkdownPreviewContainer;
