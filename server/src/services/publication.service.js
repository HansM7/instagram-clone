import publicationModel from "../models/publication.model.js";
import { responseService } from "./response.service.js";

class PublicationService {
  async findPublications() {
    try {
      const publications = await publicationModel.find();
      return responseService.ok("All publications", publications);
    } catch (error) {
      return responseService.ErrorServer(undefined, error);
    }
  }

  async create(data) {
    try {
      const created = await publicationModel.create(data);
      return responseService.ok("Publication created", created);
    } catch (error) {
      console.log(error);
    }
  }

  delete() {}
}

export const publicationService = new PublicationService();
