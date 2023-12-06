import api from "../../../Api";

class LodgingApi {
  static async getLodging() {
    return api.get("/pub");
  }
  static async getLodgingById(id) {
    return api.get(`/pub/${id}`);
  }
}
export default Lodging;
