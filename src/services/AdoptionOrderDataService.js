import http from "../http-common";

class AdoptionorderDataService {
  getAll() {
    return http.get("/adoptionorder");
  }

  get(id) {
    return http.get(`/adoptionorder/${id}`);
  }

  create(data) {
    return http.post("/adoptionorder", data);
  }

  update(id, data) {
    return http.put(`/adoptionorder/${id}`, data);
  }

  findByMID(id) {
    return http.get(`/adoptionorder/MID/${id}`);
  }
  /*
  delete(id) {
    return http.delete(`/adoptionorder/${id}`);
  }

  deleteAll() {
    return http.delete(`/adoptionorder`);
  }
  */
}

export default new AdoptionorderDataService();