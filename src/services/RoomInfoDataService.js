import http from "../http-common";

class RoomInfoDataService {
  getAllroom(size) {
    return http.get(`/roominfo/allroom/${size}`);
  }

  getAll(data) {
    return http.post("/roominfo", data);
  }

  get(id) {
    return http.get(`/roominfo/${id}`);
  }

  create(data) {
    return http.post("/roominfo", data);
  }

  update(id, data) {
    return http.put(`/roominfo/${id}`, data);
  }

  /*
  delete(id) {
    return http.delete(`/roominfo/${id}`);
  }

  deleteAll() {
    return http.delete(`/roominfo`);
  }
  */
}

export default new RoomInfoDataService();