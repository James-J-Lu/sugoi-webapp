import http from "../http-common";

class MemberpetDataService {
  getAll() {
    return http.get("/memberpet");
  }

  get(id) {
    return http.get(`/memberpet/${id}`);
  }

  create(data) {
    return http.post("/memberpet", data);
  }

  update(id, data) {
    return http.put(`/memberpet/${id}`, data);
  }

  findByMID(id) {
    return http.get(`/memberpet/MID/${id}`);
  }
  /*
  delete(id) {
    return http.delete(`/memberpet/${id}`);
  }

  deleteAll() {
    return http.delete(`/memberpet`);
  }
  */
}

export default new MemberpetDataService();