import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg: ''
    }
  }
  render(){
    const { msg } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={() => clickHelloAction()}>Click to dispatch</button>
        <h1>{msg}</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    msg: store.clickReducer.msg
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ clickHelloAction }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
