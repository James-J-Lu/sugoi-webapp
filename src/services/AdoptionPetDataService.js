import http from "../http-common";

class AdoptionPetDataService {
  getAll() {
    return http.get("/adoptionpet");
  }

  get(id) {
    console.log(id);
    return http.get(`/adoptionpet/${id}`);
  }

  logIn(data) {
    console.log(data)
    return http.post(`/adoptionpet/login`, data);
  }

  create(data) {
    console.log(data);
    return http.post("/adoptionpet", data);
  }

  update(id, data) {
    return http.put(`/adoptionpet/${id}`, data);
  }
  /*
  delete(id) {
    return http.delete(`/adoptionpet/${id}`);
  }

  deleteAll() {
    return http.delete(`/adoptionpet`);
  }

  findByTitle(title) {
    return http.get(`/adoptionpet?title=${title}`);
  }
  */
}

export default new AdoptionPetDataService();