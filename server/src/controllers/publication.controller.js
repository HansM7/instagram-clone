class PublicationController {
  async create() {}

  async getImage(req, res) {
    const id = req.params.id;

    res.sendFile("./uploads/" + id + "-" + ".jpg", { root: "./public" });
  }
}

export const publicationController = new PublicationController();
