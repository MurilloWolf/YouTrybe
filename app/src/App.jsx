import React from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';
import './GlobalStyles.css';
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
