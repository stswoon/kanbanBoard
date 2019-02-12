//@flow

import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {bobOilTableActions} from "./redux";
import {connect} from "react-redux";
import {strings} from "../../../services/strings";
import {utils} from "../../../services/utils";
import {BobOilService} from "../BobOilService";

export class BobOilTable extends Component {

}

function mapStateToProps(state) {
    const {bobOilTableReducer} = state;
    return {
        data: bobOilTableReducer.data,
        loading: bobOilTableReducer.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(bobOilTableActions, dispatch)};
}

const connected = connect(mapStateToProps, mapDispatchToProps)(BobOilTable);
export {connected as BobOilTable};


