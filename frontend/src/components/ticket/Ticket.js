// @flow

import React, {Component} from "react";
import {DatePicker, Input} from "antd";
import "./Ticket.less";

export class Ticket extends Component<Props> {
    //http://beta.ant.design/components/date-picker/
    render() {
        return (
            <div className="ticket">
                <div className="ticket__name">
                    <Input defaultValue={this.props.name} onChange={this.handleChange}/>
                </div>
                <div className="ticket__dueDate">
                    {/*<DatePicker defaultValue={this.props.dueDate} onChange={this.handleChange}/>*/}
                 </div>
                <div className="ticket__description">
                    <Input rows={4} defaultValue={this.props.description} onChange={this.handleChange}/>
                </div>
            </div>
        );
    }

    handleChange = (event) => this.props.onChange(event.target.value)
}

type Props = {
    id: string;
    name?: string;
    description?: string;
    dueDate?: string;
    status: "BACKLOG" | "IN_PROGRESS" | "DONE"; //todo make status backlog if null
};