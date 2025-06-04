import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      // fetch the body text from the API endpoint
      const response = await fetch('/api/message');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text();
      setData(text);
    })();
  });

  return <div>Server's Message: {data}</div>;
}

export default App;