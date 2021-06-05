import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import React, { Component } from 'react';
import Scroll from '../components/Scroll.js';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return !robots.length ? <h1>LOADING</h1> : (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </div>
            );
    }}

export default App;

