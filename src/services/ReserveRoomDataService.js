import http from "../http-common";

class ReserveRoomDataService {
  getAll() {
    return http.get("/reserveroom");
  }

  get(id) {
    return http.get(`/reserveroom/${id}`);
  }

  create(data) {
    return http.post("/reserveroom", data);
  }

  update(id, data) {
    return http.put(`/reserveroom/${id}`, data);
  }

  findByMID(id) {
    return http.get(`/reserveroom/MID/${id}`);
  }

  getList(data) {
    return http.post(`/reserveroom/test`, data);
  }
  /*
  delete(id) {
    return http.delete(`/reserveroom/${id}`);
  }

  deleteAll() {
    return http.delete(`/reserveroom`);
  }
  */
}

export default new ReserveRoomDataService();