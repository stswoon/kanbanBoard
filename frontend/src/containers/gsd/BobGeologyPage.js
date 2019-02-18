//@flow

import React, {Component} from "react";
import {BobHeader} from "../header/BobHeader";
import BobSplitPanel from "../../components/split-panel/BobSplitPanel";
import "./BobGeologyPage.less"
import {Tabs} from "antd";
import {strings} from "../../services/strings";
import {BobWaterTable} from "./watertable/BobWaterTable";
import {BobGeologyCharts} from "./BobGeologyCharts";
import {BobGasTable} from "./gastable/BobGasTable";
import {BobOilTable} from "./oiltable/BobOilTable";
import {BobColumnTable} from "./tables/BobColumnTable";

const TabPane = Tabs.TabPane;

export class BobGeologyPage extends Component {
    state = {
        tick: 0
    };

    render() {
        const columnTabs = [];
        // columnTabs.push(
        //     <TabPane tab={strings.geology.tabs.PP} key="columnTab_PP">
        //         <BobPpTable dataRecalculated={this.refreshChart}/>
        //     </TabPane>
        // );
        // columnTabs.push(
        //     <TabPane tab={strings.geology.tabs.FG} key="columnTab_FG">
        //         <BobFgTable dataRecalculated={this.refreshChart}/>
        //     </TabPane>
        // );
        // columnTabs.push(
        //     <TabPane tab={strings.geology.tabs.DBG} key="columnTab_DBG">
        //         <BobDbgTable dataRecalculated={this.refreshChart}/>
        //     </TabPane>
        // );
        // columnTabs.push(
        //     <TabPane tab={strings.geology.tabs.T} key="columnTab_T">
        //         <BobTemperatureTable dataRecalculated={this.refreshChart}/>
        //     </TabPane>
        // );
        columnTabs.push(
            <TabPane tab={strings.geology.tabs.column} key="columnTab_column">
                <BobColumnTable dataRecalculated={this.refreshChart}/>
            </TabPane>
        );
        columnTabs.push(
            <TabPane tab={strings.geology.tabs.oil} key="columnTab_oil">
                <BobOilTable dataRecalculated={this.refreshChart}/>
            </TabPane>
        );
        columnTabs.push(
            <TabPane tab={strings.geology.tabs.gas} key="columnTab_gas">
                <BobGasTable dataRecalculated={this.refreshChart}/>
            </TabPane>
        );
        columnTabs.push(
            <TabPane tab={strings.geology.tabs.water} key="columnTab_water">
                <BobWaterTable dataRecalculated={this.refreshChart}/>
            </TabPane>
        );

        return (
            <React.Fragment>
                <header><BobHeader/></header>
                <article>
                    <BobSplitPanel split="vertical" defaultSize={700}>
                        <Tabs key="tabs" className="bob-geology-page__tabs">{columnTabs}</Tabs>
                        <BobGeologyCharts key="charts" tick={this.state.tick}/>
                    </BobSplitPanel>
                </article>
            </React.Fragment>
        )
    }

    refreshChart = () => {
        this.setState({tick: this.state.tick + 1});
    };
}