import { Http } from "./http";

export default class projectService {
  static async getProject() {
    return await Http.get("/project");
  }

  static async deleteCategorie(id) {
    return await Http.delteData(`/categorie/${id}`);
  }
}
