import http from "../http-common";

class MemberDataService {
  getAll() {
    return http.get("/member");
  }

  get(id) {
    return http.get(`/member/${id}`);
  }

  logIn(data) {
    return http.post(`/member/login`, data);
  }

  create(data) {
    return http.post("/member/create", data);
  }

  update(id, data) {
    console.log(data)
    return http.put(`/member/${id}`, data);
  }
  /*
  delete(id) {
    return http.delete(`/member/${id}`);
  }

  deleteAll() {
    return http.delete(`/member`);
  }

  findByTitle(title) {
    return http.get(`/member?title=${title}`);
  }
  */
}

export default new MemberDataService();