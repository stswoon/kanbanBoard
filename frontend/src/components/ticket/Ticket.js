// @flow

import React, {Component} from "react";
import {DatePicker, Input} from "antd";
import "./Ticket.less";
import moment from "moment";
import {strings} from "../../services/strings";

const {TextArea} = Input;

export class Ticket extends Component<Props> {
    //http://beta.ant.design/components/date-picker/
    render() {
        return (
            <div className="ticket">
                <div className="ticket__header"/>
                <div className="ticket__name">
                    <Input className="ticket__input" defaultValue={this.props.name}
                           onChange={this.handleChange}/>
                </div>
                <div className="ticket__dueDate">
                    <span className="ticket__input-name">{strings.ticket.dueDate}</span>
                    <DatePicker className="ticket__input" defaultValue={moment(this.props.dueDate)}
                                onChange={this.handleChange}/>
                </div>
                <div className="ticket__description">
                    <TextArea className="ticket__input" rows={4} defaultValue={this.props.description}
                              onChange={this.handleChange}/>
                </div>
            </div>
        );
    }

    handleChange = (event) => this.props.onChange(event.target.value)
}

type Props = TicketType;