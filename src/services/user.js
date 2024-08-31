import { Http } from "./http";

export default class userService {
  static async getUser() {
    return await Http.get("auth/user");
  }

  static async deleteUser(id) {
    return await Http.delteData(`auth/user/${id}`);
  }
}
