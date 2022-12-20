import http from "../http-common";

class NurserypetorderDataService {
  getAll() {
    return http.get("/nurserypetorder");
  }

  get(id) {
    return http.get(`/nurserypetorder/${id}`);
  }

  create(data) {
    return http.post("/nurserypetorder", data);
  }

  update(id, data) {
    return http.put(`/nurserypetorder/${id}`, data);
  }

  findByMID(id) {
    return http.get(`/nurserypetorder/MID/${id}`);
  }
  /*
  delete(id) {
    return http.delete(`/nurserypetorder/${id}`);
  }

  deleteAll() {
    return http.delete(`/nurserypetorder`);
  }
  */
}

export default new NurserypetorderDataService();