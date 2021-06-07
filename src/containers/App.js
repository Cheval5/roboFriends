import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions/actions';
import './App.css';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots()
    }

    render() {
        const { searchField, onSearchChange, robots, isPending} = this.props
        const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
    return isPending ? <h1>LOADING</h1> : (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>
            </div>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



