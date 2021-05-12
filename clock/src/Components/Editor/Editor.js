import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import '../Easings.css';
import './Editor.css';

const Editor = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`editor ${show ? 'show' : ''} ease-joel`}>
        editor
      </div>
      <button
        className={`editor-show-btn ${show ? 'show' : ''} ease-joel`}
        onClick={() => setShow(!show)}
      >{show ? <FaChevronUp /> : <FaChevronDown />}</button>
    </>
  );
};

export default Editor;
