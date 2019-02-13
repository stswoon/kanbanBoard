//@flow

import React, {Component} from "react";
import {strings} from "../../services/strings";
import {Header} from "../header/Header";
import {Board} from "../../components/board/Board";


export class KanbanBoardPage extends Component {
    render() {
        return (
            <React.Fragment>
                <header><Header/></header>
                <article><Board tickets={tickets}/></article>
            </React.Fragment>
        )
    }
}

const tickets = [
    {
        "id": "d5e3adf4-d88e-426f-a734-aabe3f82eb99",
        "name": "Requirements",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "dueDate": "2019-03-07T00:00:00.000+0000",
        "status": "DONE"
    },
    {
        "id": "8dda4640-3683-410e-83ea-65b465a68313",
        "name": "Design",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "dueDate": "2019-03-08T00:00:00.000+0000",
        "status": "DONE"
    },
    {
        "id": "09ca19be-d1b5-4990-a23d-634b462de8e4",
        "name": "Backend",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "dueDate": "2020-03-09T00:00:00.000+0000",
        "status": "IN_PROGRESS"
    },
    {
        "id": "d4ff39a2-5b83-4589-a73b-26745a532602",
        "name": "Frontend",
        "description": "Lorem ipsum dolor sit amet",
        "status": "IN_PROGRESS"
    },
    {
        "id": "4e7b4d4d-6361-44a1-b278-6b768c406e49",
        "name": "Test",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "dueDate": "2019-04-10T00:00:00.000+0000",
        "status": "BACKLOG"
    },
    {
        "id": "a2ef2431-8ef4-4de8-8c08-e500034fd29d",
        "name": "Docs",
        "status": "BACKLOG"
    },
    {
        "id": "f4414012-54a9-4260-abd9-81b7ba42880e",
        "name": "Demo",
        "status": "BACKLOG"
    },
    {
        "id": "0dcda4c1-2cad-4741-bcb9-465a1af64d64",
        "name": "Code review + fix todos",
        "status": "BACKLOG"
    },
    {
        "id": "2369cd90-a644-43f6-89c5-de262e35798d",
        "status": "BACKLOG"
    }
];