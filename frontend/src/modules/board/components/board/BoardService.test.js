import {BoardService} from "./BoardService";
import {HttpService} from "../../../shared/services/http";

jest.mock("../../../shared/services/http");

it('check remove ticket', () => {
    BoardService.removeTicket("12345");
    expect(HttpService.send).toHaveBeenCalledWith("delete", "/ticketEntities/12345");
});

