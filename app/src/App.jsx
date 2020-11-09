import React from 'react';
import Header from './components/header';
import VideoList from './components/VideoList';
import './GlobalStyles.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <VideoList />
      </>
    );
  }
}

export default App;
