//@flow

import React, {Component} from "react";
import BobTable from "../../../components/table/BobTable";
import {bindActionCreators} from "redux";
import {bobOilTableActions} from "./redux";
import {connect} from "react-redux";
import {Button} from "antd";
import {strings} from "../../../services/strings";
import {utils} from "../../../services/utils";
import {BobLocalStorageKeys, LocalStorageService} from "../../../services/localStorage";
import BobPanel from "../../../components/panel/BobPanel";
import {BobOilService} from "../BobOilService";

export class BobOilTable extends Component {
    state = {
        loading: false,
        points: [],
        validData: true, //fixme: click f5 and click calculate even if no required data it send request
        warnings: []
    };

    componentDidMount() {
        let points = LocalStorageService.get(BobLocalStorageKeys.geology.oilPoints);
        if (points == null) {
            points = [];
        }
        this.setState({points});
    }

    render() {
        const latent = [];
        this.state.points.forEach((p, index) => {
            if (p.smSL === false) {
                latent.push({key: index, dataIndex: "orificeTemperature"});
                latent.push({key: index, dataIndex: "layerTemperature"});
                latent.push({key: index, dataIndex: "gasCompressibility"});
            }
        });


        return (
            <div>
                <BobPanel>
                    <Button key={1} type="primary" loading={this.state.loading} onClick={this.calculate}>
                        {strings.table.calculate}
                    </Button>
                </BobPanel>
                <BobTable structure={structure} data={this.state.points} vertical={true}
                          latent={latent} warnings={this.state.warnings}
                          onChange={this.handleChange}/>
            </div>
        )
    }

    calculate = () => {
        if (this.state.loading) {
            return;
        }

        let minAvailableDepth = Math.max(...this.state.points.map(p => p.roof));
        const geology = LocalStorageService.get("geology");
        const warnings = [];
        ["t", "pp", "fg"].forEach(tableName => {
            if (!geology || !geology[tableName] || !geology[tableName].points) {
                warnings.push(strings.geology.oilGas.warnFillTable.replace("{table}", tableName));
            } else if (geology && geology[tableName] && geology[tableName].points) {
                if (utils.array.lastElement(geology[tableName].points).depth < minAvailableDepth)
                    warnings.push(strings.geology.oilGas.warnMinAvailableDepth
                        .replace("{table}", tableName.toUpperCase()).replace("{minAvailableDepth}", minAvailableDepth));
            }
        });
        if (!geology || !geology.fg || !geology.fg.percentage) {
            warnings.push(strings.geology.oilGas.warnFillFGPercentage)
        }
        if (warnings.length) {
            this.setState({warnings});
            return;
        }

        this.setState({warnings, loading: true}, () => {
            if (!this.state.validData) {
                this.setState({loading: false});
                return;
            }

            BobOilService.calculate()
                .then((response) => {
                    const points = response.data.oil.points;
                    this.setState({loading: false, points}, () => {
                        this.props.dataRecalculated();
                    });
                })
                .catch(() => {
                    this.setState({loading: false});
                });
        });
    };

    handleChange = (data) => {
        if (this.state.loading) {
            return;
        }

        const points = data.data;
        LocalStorageService.set(BobLocalStorageKeys.geology.oilPoints, points);
        this.setState({points, validData: data.valid}, () => {
            if (data.valid && LocalStorageService.getSettings().autoCalc) {
                this.calculate();
            }
        });
    }
}

// function mapStateToProps(state) {
//     const {bobOilTableReducer} = state;
//     return {
//         data: bobOilTableReducer.data,
//         loading: bobOilTableReducer.loading,
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {actions: bindActionCreators(bobOilTableActions, dispatch)};
// }

//const connected = connect(mapStateToProps, mapDispatchToProps)(BobOilTable);
//export {connected as BobOilTable};


const structure = [
    {
        title: strings.geology.oilGas.name,
        dataIndex: "name",
        type: "input"
    },
    {
        title: strings.geology.oilGas.roof,
        dataIndex: "roof",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.sole,
        dataIndex: "sole",
        type: "number"
    },
    {
        title: strings.geology.oilGas.densityOil,
        dataIndex: "densityOil",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.densityGas,
        dataIndex: "densityGas",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.saturationPressure,
        dataIndex: "saturationPressure",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.h2s,
        dataIndex: "h2s",
        type: "number"
    },
    {
        title: strings.geology.oilGas.hco2,
        dataIndex: "hco2",
        type: "number"
    },
    {
        title: strings.geology.oilGas.orificeTemperature,
        dataIndex: "orificeTemperature",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.gasCompressibility,
        dataIndex: "gasCompressibility",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.layerPressure,
        dataIndex: "layerPressure",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.gasColumnHeight,
        dataIndex: "gasColumnHeight",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.layerTemperature,
        dataIndex: "layerTemperature",
        type: "number-as-text"
    },

    {
        title: strings.geology.oilGas.resultSection,
        type: "section"
    },
    {
        title: strings.geology.oilGas.shoeDepth,
        dataIndex: "shoeDepth",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.shoePressure,
        dataIndex: "shoePressure",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.wellPressure,
        dataIndex: "wellPressure",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.pressureReserve,
        dataIndex: "pressureReserve",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.orificePressure,
        dataIndex: "orificePressure",
        type: "number-as-text"
    },


    {
        title: strings.geology.oilGas.resultFluidSection,
        type: "section"
    },
    {
        title: strings.geology.oilGas.fluidReserve,
        dataIndex: "fluidReserve",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.shoePressureFluid,
        dataIndex: "shoePressureFluid",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.orificePressureFluid,
        dataIndex: "orificePressureFluid",
        type: "number-as-text"
    },


    {
        title: strings.geology.oilGas.resultCrimpingSection,
        type: "section"
    },
    {
        title: strings.geology.oilGas.orificePressureCrimping,
        dataIndex: "orificePressureCrimping",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.workingPressureSeaDrilling,
        dataIndex: "workingPressureSeaDrilling",
        type: "number-as-text"
    },


    {
        title: strings.geology.oilGas.otherSection,
        type: "section"
    },
    {
        title: strings.geology.oilGas.smSL,
        dataIndex: "smSL",
        type: "checkbox",
        availableValues: [
            {value: true, title: "Sm"},
            {value: false, title: "Sl"}
        ]
    },
    {
        title: strings.geology.oilGas.shoeReserve,
        dataIndex: "shoeReserve",
        type: "number-as-text",
    }
];