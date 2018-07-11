import React, { Component } from 'react';

import Button from './components/Button';
import Grid from './components/Grid';
import Hey from './components/Hey';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: false
    };


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      start: true
    });
  }


  render() {


    if (!this.state.start) {
      return (
        <div className="container">
          <h2 className="heading-secondary">
            Sudoku
        </h2>
          <Button onClick={this.handleClick} />
        </div>
      );
    } else { 
      return (
        <Grid />
      );
    }
    
  }
}

export default App;


// return (
//   <div className="container">
//     <div className="container__grid container__grid--a">
//       <Grid id='grid-a-1' />
//       <Grid id='grid-a-2' />
//       <Grid id='grid-a-3' />
//     </div>
//     <div className="container__grid container__grid--b">
//       <Grid id='grid-b-1' />
//       <Grid id='grid-b-2' />
//       <Grid id='grid-b-3' />
//     </div>
//     <div className="container__grid container__grid--c">
//       <Grid id='grid-c-1' />
//       <Grid id='grid-c-2' />
//       <Grid id='grid-c-3' />
//     </div>
//   </div>
// );