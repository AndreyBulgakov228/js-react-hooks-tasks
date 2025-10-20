import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorRef = useRef(null);
  const editorContainerRef = useRef(null);

  useEffect(() => {
    if (editorContainerRef.current) {
      const editorInstance = new Editor({
        el: editorContainerRef.current,
        hideModeSwitch: true,
      });
      
      editorRef.current = editorInstance;

      editorInstance.addHook('change', () => {
        const content = editorInstance.getMarkdown();
        onContentChange(content);
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [onContentChange]);

  return (
    <div ref={editorContainerRef}></div>
  );
  // END
};

export default MarkdownEditor;
