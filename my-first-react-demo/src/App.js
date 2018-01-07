import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tab.jsx';

class App extends Component {
    constuctor() {

    }
    componentWillMount() {
        console.log("will Mount")
    }
    componentDidMount() {
        console.log("DId mount")
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcossme to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Tabs defaultActiveIndex={1} className="tabs-bar">
                    <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容</TabPane>
                    <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
                    <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
