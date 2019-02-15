// @flow

import React, {Component} from "react";
import {Button, Form, Input} from "antd";
import {strings} from "../shared/services/strings";
import "./LoginForm.less";

//simple email validation, if need more see https://stackoverflow.com/a/1373724
const isEmailValid = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export class LoginForm extends Component {
    state = {
        formSubmited: false,
        email: {
            touched: false,
            value: ""
        }
    };

    render() {
        return (
            <Form className="login-form" onSubmit={this.handleSubmit}>
                <Form.Item key="email" className="login-form__field" {...this.validateEmailInput()} >
                    <Input
                        addonBefore="Email:"
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onPressEnter={this.handleSubmit}
                        onChange={this.handleInputChange}
                    />
                </Form.Item>
                <Form.Item key="controls" className="login-form__field">
                    <Button className="login-form__submit-button"
                            type="primary" htmlType="submit"
                            onClick={this.login}
                    >{strings.login.submitButton}</Button>
                </Form.Item>
            </Form>
        );
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: {touched: true, value}});
    };

    validateEmailInput = () => {
        const email = this.state.email.value;
        const empty = email == null || email === "";
        const showRequired = (this.state.formSubmited || this.state.email.touched) && empty;
        const showValid = !empty && !isEmailValid(email);

        if (showRequired) {
            return {validateStatus: "error", help: strings.login.email.required};
        } else if (showValid) {
            return {validateStatus: "error", help: strings.login.email.notValid};
        } else {
            return null;
        }
    };

    handleSubmit = (event) => {
        event.preventDefault(); //cancel normal html submit
        this.setState({formSubmited: true}, () => {
            let fromValid = this.validateEmailInput() == null;
            if (fromValid) {
                localStorage.setItem("login", "true");
            }
        });
    }
}