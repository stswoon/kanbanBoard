// @flow

import React, {Component} from "react";
import {Button, DatePicker, Input} from "antd";
import "./Ticket.less";
import moment from "moment";
import {strings} from "../../../shared/services/strings";
import {utils} from "../../../shared/services/utils";
import type {TicketType} from "../../BoardModels";

const throttle = require('lodash.throttle');
const {TextArea} = Input;


export class Ticket extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            dueDate: this.props.dueDate,
            description: this.props.description,
            status: this.props.status
        };
    }


    render() {
        return (
            <div className="ticket">
                <div className="ticket__header"/>
                <div className="ticket__name">
                    <Input className="ticket__input" defaultValue={this.props.name || strings.ticket.noname}
                           name="name" onChange={this.handleInputChange}/>
                    <Button type="danger" icon="delete" onClick={this.remove}/>
                </div>
                <div className="ticket__dueDate">
                    <span className="ticket__input-name">{strings.ticket.dueDate}</span>
                    <DatePicker className="ticket__input" defaultValue={moment(this.props.dueDate)}
                                onChange={this.handleDateChange}/>
                </div>
                <div className="ticket__description">
                    <TextArea className="ticket__input" rows={4} defaultValue={this.props.description}
                              name="description" onChange={this.handleInputChange}/>
                </div>
            </div>
        );
    }

    remove = () => {
        this.props.onRemove(this.props.id);
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value}, () => {
            this.handleChange();
        });
    };

    handleDateChange = (date, dateString) => {
        console.log(date, dateString); //todo
    };

    handleChange = () => {
        let f = () => this.props.onChange(utils.object.deepCopy(this.state));
        f = throttle(f, 100);
        f();
    }
}

type Props = TicketType;