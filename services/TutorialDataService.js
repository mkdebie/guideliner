import http from "../http-common";

class TutorialDataService {
    getParams() {
    return http.get("tutorials/allparams");
  }

}

export default new TutorialDataService();