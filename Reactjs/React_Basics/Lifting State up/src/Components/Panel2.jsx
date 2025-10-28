import React from 'react';

const Panel2 = ({ panel2Active, setPanel2Active, setPanel1Active }) => {
  // If panel2Active is false → hide this panel
  if (!panel2Active) return null;

  return (
    <div>
      <h2>Panel 2</h2>
      <p>Some data from Panel 2</p>
      <button
        onClick={() => {
          setPanel2Active(false);  // hide this panel
          setPanel1Active(true);   // show Panel 1
        }}
      >
        Go to Panel 1
      </button>
    </div>
  );
};

export default Panel2;
