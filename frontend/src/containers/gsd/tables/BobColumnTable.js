//@flow

import React from "react";
import {strings} from "../../../services/strings";
import {BobLocalStorageKeys, LocalStorageService} from "../../../services/localStorage";
import {BobOilService} from "../BobOilService";
import {BobCalculateTable} from "../../../components/calculate-table/BobCalculateTable";

//todo test, test data
export class BobColumnTable extends BobCalculateTable {
    getStructure() {
        return structure;
    }

    getPointsBeforeFirstRender() {
        return LocalStorageService.get(BobLocalStorageKeys.geology.columnPoints);
    }

    getWarnings = (): Array<string> => {
        const warnings = [];

        const trajectory = LocalStorageService.get(BobLocalStorageKeys.trajectory.main);
        if (trajectory == null || trajectory.points == null ||
            trajectory.interpolationStep == null || trajectory.interpolationStep > 1.001) {
            warnings.push(strings.geology.column.warnings.calculateTrajectoryFirst);
        }

        return warnings;
    };

    getService = () => {
        return BobOilService
    };

    processPointsFromCalculateResponse = (response) => {
        return response.data.column.points;
    };
}

const structure = [
    {
        title: strings.geology.column.type,
        dataIndex: "type",
        type: "select",
        availableValues: [
            {value: "direction", title: strings.geology.columns.direction},
            {value: "conductor", title: strings.geology.columns.conductor},
            {value: "shankBetween", title: strings.geology.columns.shankBetween},
            {value: "thechnicalColumn", title: strings.geology.columns.thechnicalColumn},
            {value: "pilot", title: strings.geology.columns.pilot},
            {value: "operational", title: strings.geology.columns.operational},
            {value: "operationalShank", title: strings.geology.columns.operationalShank}
        ]
    },
    {
        title: strings.geology.column.bootShoe,
        dataIndex: "bootShoe",
        type: "number",
        required: true
    },
    {
        title: strings.geology.column.columndDiameter,
        dataIndex: "columndDiameter",
        type: "number",
        required: true
    },
    {
        title: strings.geology.column.densityOfSolution,
        dataIndex: "densityOfSolution",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.shoeVertically,
        dataIndex: "shoeVertically",
        type: "number",
        required: true
    },
    {
        title: strings.geology.oilGas.suspensionInVertical,
        dataIndex: "suspensionInVertical",
        type: "number-as-text"
    },
    {
        title: strings.geology.oilGas.suspnsionOnTrunk,
        dataIndex: "suspnsionOnTrunk",
        type: "number-as-text"
    }
];