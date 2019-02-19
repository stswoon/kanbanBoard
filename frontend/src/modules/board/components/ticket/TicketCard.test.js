import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from 'enzyme-to-json';
import {TicketCard} from "./TicketCard";

const ticket = {
    "id": "d5e3adf4-d88e-426f-a734-aabe3f82eb99",
    "name": "Requirements",
    "description": "Lorem ipsum",
    "dueDate": "2019-03-07T00:00:00.000+0000",
    "status": "DONE"
};

it('renders without crashing', () => {
    const ar = shallow(<TicketCard {...ticket}/>);
    expect(shallowToJson(ar)).toMatchSnapshot();
});

