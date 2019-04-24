import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>
          We are using Node.js {process.versions.node},
          Chromium {process.versions.chrome},
          and Electron {process.versions.electron}.
        </p>
      </div>
    );
  }
}

export default App;