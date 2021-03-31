import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldMap: [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ]
    };
  }

  world() {
    const { worldMap } = this.state;
    return (
      <table>
        {worldMap.map((line) => (
          <tr>
            {line.map((column) => (
              <td>{column}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }

  render() {
    return this.world();
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
