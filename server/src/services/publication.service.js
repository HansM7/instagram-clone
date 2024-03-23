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

  create() {}

  delete() {}
}

export const publicationService = new PublicationService();
