import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'https://esm.sh/remark-gfm@3';
import rehypeRaw from 'https://esm.sh/rehype-raw@6';

function Previewer({ input }) {
  return (
    <div className="markdown-output" id="preview">
      <div id="preview" />
      <ReactMarkdown
        className="preview-text"
        rehypePlugins={[rehypeRaw, remarkGfm]}
        children={input}
      />
    </div>
  );
}

export default Previewer;
