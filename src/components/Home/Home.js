import React from 'react';
import './Home.css';

class Home extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="homeContent">
        <h2>Just type in a word and press search to learn about its kanji!</h2>
        <br />
        <p>For information about the API used or the icons used check out the About section in the navigation bar.</p>
      </div>
    );
  }
}

export default (Home);
