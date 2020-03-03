import {shallow, mount, reder} from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render App component', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    expect(shallow(<App store={mockStore}/>)).toMatchSnapshot();
})