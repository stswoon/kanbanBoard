import {HttpService} from "../../services/http";
import {BobLocalStorageKeys, LocalStorageService} from "../../services/localStorage";

//todo rename
export const BobOilService = {
  calculate: () => {
      const data = LocalStorageService.get(BobLocalStorageKeys.geology.main) || {};
      if (data.column) {
          const trajectoryPoints = LocalStorageService.get(BobLocalStorageKeys.trajectory.points);
          if (trajectoryPoints) {
              data.column.trajectoryResult = {points: trajectoryPoints};
          }
          data.column.interpolationStep = LocalStorageService.get(BobLocalStorageKeys.trajectory.interpolationStep);
      }
      return HttpService.send("post", "/api/geology/calculate", data)
          .then((response) => {
              console.log(response);
              LocalStorageService.set(BobLocalStorageKeys.geology.main, response.data);
              return response;
          })
  }
};

window.BobOilService = {
    calculate: BobOilService.calculate
};