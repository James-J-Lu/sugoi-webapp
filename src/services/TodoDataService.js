import http from "../http-common";

class TodoDataService {
  getAll() {
    return http.get("/todos");
  }

  postAll() {
    return http.post("/todos");
  }

  get(id) {
    console.log(id);
    return http.get(`/todos/${id}`);
  }

  create(data) {
    console.log(data);
    return http.post("/todos", data);
  }

  update(id, data) {
    return http.put(`/todos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/todos/${id}`);
  }

  deleteAll() {
    return http.delete(`/todos`);
  }

  findByTitle(title) {
    return http.get(`/todos?title=${title}`);
  }
}

export default new TodoDataService();