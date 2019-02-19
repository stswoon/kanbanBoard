// @flow

import React, {Component} from "react";
import {Button, DatePicker, Input, Popconfirm} from "antd";
import "./TicketCard.less";
import moment from "moment";
import {strings} from "../../../shared/services/strings";
import {utils} from "../../../shared/services/utils";
import type {Ticket, UUID} from "../../BoardModels";

const debounce = require('lodash.debounce');
const {TextArea} = Input;

type Props = Ticket | {
    onChange: (ticket: Ticket) => void,
    onRemove: (ticketId: UUID) => void
};
type State = Ticket;

export class TicketCard extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            boardId: this.props.boardId,
            name: this.props.name,
            description: this.props.description,
            dueDate: this.props.dueDate,
            status: this.props.status,
            order: this.props.order
        };
    }

    render() {
        return (
            <div className="ticket">
                <div className="ticket__header"/>
                <div className="ticket__name">
                    <Input className="ticket__input" defaultValue={this.props.name || strings.ticket.noname}
                           name="name" onChange={this.handleInputChange}/>
                    <Popconfirm title={strings.ticket.areYouSure} okText={strings.ticket.remove}
                                cancelText={strings.ticket.cancel} onConfirm={this.remove}>
                        <Button type="danger" icon="delete"/>
                    </Popconfirm>
                </div>
                <div className="ticket__dueDate">
                    <span className="ticket__input-name">{strings.ticket.dueDate}</span>
                    <DatePicker className="ticket__input"
                                defaultValue={this.props.dueDate && moment(this.props.dueDate)}
                                onChange={this.handleDateChange} placeholder=""/>
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
        console.log(date, dateString);
        this.setState({dueDate: dateString}, () => {
            this.handleChange();
        });
    };

    debounceHandleChange;

    handleChange = () => {
        if (!this.debounceHandleChange) {
            let f = () => {
                this.props.onChange(utils.object.deepCopy(this.state));
            };
            f = f.bind(this);
            this.debounceHandleChange = debounce(f, 500);
        }
        this.debounceHandleChange();
    }
}