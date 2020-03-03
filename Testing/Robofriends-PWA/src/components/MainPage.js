import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "./App.css";

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots, isPending   } = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
        <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
                )
    }
}

export default MainPage;