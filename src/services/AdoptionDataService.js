import http from "../http-common";

class AdoptionDataService {
  getAll() {
    console.log('0')
    return http.get("/adoption");
  }

  get(id) {
    console.log(id);
    return http.get(`/adoption/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/adoption", data);
  }

  update(id, data) {
    console.log(data)
    return http.put(`/adoption/${id}`, data);
  }

  findByMID(id) {
    return http.get(`/adoption/MID/${id}`);
  }
  /*
  delete(id) {
    return http.delete(`/adoption/${id}`);
  }

  deleteAll() {
    return http.delete(`/adoption`);
  }
  */
}

export default new AdoptionDataService();