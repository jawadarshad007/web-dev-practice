import React from 'react';

const Panel1 = ({ panel1Active, setPanel1Active, setPanel2Active }) => {
  // If panel1Active is false → hide this panel
  if (!panel1Active) return null;

  return (
    <div>
      <h2>Panel 1</h2>
      <p>Some data from Panel 1</p>
      <button
        onClick={() => {
          setPanel1Active(false);  // hide this panel
          setPanel2Active(true);   // show Panel 2
        }}
      >
        Go to Panel 2
      </button>
    </div>
  );
};

export default Panel1;
