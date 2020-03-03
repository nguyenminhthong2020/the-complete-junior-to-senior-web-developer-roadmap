import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "../containers/App.css";

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }
    render() {
        const { onSearchChange, robots, isPending   } = this.props;

        return (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={this.filterRobots()} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
                )
    }
}

export default MainPage;