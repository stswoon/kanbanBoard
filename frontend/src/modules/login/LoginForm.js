// @flow

import React, {Component} from "react";
import {Button, Form, Input} from "antd";
import {strings} from "../shared/services/strings";
import "./LoginForm.less";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginActions} from "./LoginFormRedux";
import {Redirect} from "react-router-dom";

//simple email validation, if need more see https://stackoverflow.com/a/1373724
const isEmailValid = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

class LoginForm extends Component {
    state = {
        formSubmited: false,
        email: {
            touched: false,
            value: ""
        }
    };

    componentWillMount() {
        this.props.actions.logout();
    }

    render() {
        if (this.props.authenticated) {
            return (<Redirect to={"/"}/>);
        }
        return (
            <Form className="login-form" onSubmit={this.handleSubmit}>
                <Form.Item className="login-form__field">
                    <span>Try 'alex@test.com' for demo</span>
                </Form.Item>
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
                            onClick={this.handleSubmit}
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

    validateEmailInput = (): any | null => {
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
                this.props.actions.login(this.state.email.value);
            }
        });
    }
}

function mapStateToProps(state) {
    const {loginReducer} = state;
    return {authenticated: !!loginReducer.userEmail};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(loginActions, dispatch)};
}

const connected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export {connected as LoginForm};