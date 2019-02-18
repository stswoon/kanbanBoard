//@flow

import React, {Component} from "react";
import {BobLocalStorageKeys, LocalStorageService} from "../../services/localStorage";
import {MathService} from "../../services/math";
import BobChart from "../../components/chart/BobChart";
import {strings} from "../../services/strings";
import {utils} from "../../services/utils";
import {Tabs} from "antd";
import "./BobGeologyCharts.less"

const TabPane = Tabs.TabPane;

export class BobGeologyCharts extends Component {
    render() {
        // const breakagePoints = LocalStorageService.get(BobLocalStorageKeys.breakage.points) || [];
        // const breakagePoint = breakagePoints.find(p => p.columnId === this.props.columnId);
        //
        // if (breakagePoint == null || breakagePoint.differenceCharts == null || breakagePoint.charts == null) {
        //     return (<div>{strings.breakage.charts.nodata}</div>);
        // }
        //
        // const ppSeries = {
        //     name: strings.breakage.charts.pp,
        //     data: breakagePoint.ppChart.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ff0014"
        // };
        // const sortedChartKeys = ["LOSS", "BLOWOUT", "CEMENT", "DRILLOUT", "TEST"]; //Object.keys(breakagePoint.charts)
        // const chartConfigs = sortedChartKeys.map(key => {
        //     const chart = breakagePoint.charts[key];
        //     const chartSeries = {
        //         name: strings.breakage.charts[key.toLocaleLowerCase()],
        //         data: chart.points.map(p => [p.x, MathService.round(p.y)]),
        //         color: "#201f20"
        //     };
        //     const ppSeriesFix = utils.object.deepCopy(ppSeries);
        //     if (key === "CEMENT") {
        //         ppSeriesFix.name = strings.breakage.charts.innerPressure;
        //     }
        //     return {key, series: [ppSeriesFix, chartSeries]};
        // });
        //
        // const differenceChartSeries = [];
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.loss,
        //     data: breakagePoint.differenceCharts.LOSS.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ff3d64"
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.blowout,
        //     data: breakagePoint.differenceCharts.BLOWOUT.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ff613e"
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.test,
        //     data: breakagePoint.differenceCharts.TEST.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ff54e1"
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.drillout,
        //     data: breakagePoint.differenceCharts.DRILLOUT.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ffe771"
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.cement,
        //     data: breakagePoint.differenceCharts.CEMENT.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#ffbcda"
        // });
        //
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.pressureCollapse,
        //     data: breakagePoint.differenceCharts.PRESSURE_COLLAPSE.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#af0000",
        //     lineWidth: 4
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.pressureBurst,
        //     data: breakagePoint.differenceCharts.PRESSURE_BURST.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#af0000",
        //     lineWidth: 4
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.pressureCollapseEstimated,
        //     data: breakagePoint.differenceCharts.PRESSURE_COLLAPSE_ESTIMATED.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#af0000",
        //     lineWidth: 4,
        //     dashStyle: "Dash"
        // });
        // differenceChartSeries.push({
        //     name: strings.breakage.charts.pressureBurstEstimated,
        //     data: breakagePoint.differenceCharts.PRESSURE_BURST_ESTIMATED.points.map(p => [p.x, MathService.round(p.y)]),
        //     color: "#af0000",
        //     lineWidth: 4,
        //     dashStyle: "Dash"
        // });
        // const differenceChartConfig = {
        //     chart: {height: "600px"},
        //     series: differenceChartSeries
        // };
        //
        // return (
        //     <Tabs>
        //         <TabPane tab={strings.breakage.innerPressure} key="charts">
        //             <div className="bob-breakage-charts__charts">
        //                 {chartConfigs.map(config => (
        //                     <BobChart className="bob-breakage-charts__charts-item" key={"chart_" + config.key}
        //                               config={config}/>
        //                 ))}
        //             </div>
        //         </TabPane>
        //         <TabPane tab={strings.breakage.overPressure} key="diffChart">
        //             <BobChart className="bob-breakage-charts__diff-chart" config={differenceChartConfig}/>
        //         </TabPane>
        //     </Tabs>
        // )
        return "nope"
    }
}
