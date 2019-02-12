import {HttpService} from "../../services/http";

//todo rename
export const KanbanBoardService = {
    calculate: () => {
        return HttpService.send("post", "/api/geology/calculate", data)
            .then((response) => {
                console.log(response);

                return response;
            })
    }
};

window.BobOilService = {
    calculate: KanbanBoardService.calculate
};