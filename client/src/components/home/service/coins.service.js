import http from "../http-common";

class CoinsService {
  getCoins(name) {
    return http.get("/user/userdata", { name: name });
  }

  updateCoins(name, newCoins) {
    return http.put("/user/userdata", { name: name, coins: newCoins});
  }
}

export default new CoinsService();