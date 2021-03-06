import _fruitService from "../../fruit.service.js";

class FruitController {
  async getFruits(req, res) {
    const fruits = await _fruitService.getFruits();

    return res.send({
      ok: true,
      payload: fruits,
      version: 2.0
    });
  }

  async getFruit(req, res) {
    const { fruitId } = req.params;
    const fruit = await _fruitService.getFruit(fruitId);

    return res.send({
      ok: true,
      payload: fruit,
      version: 2.0
    });
  }

  async createFruit(req, res) {
    const { body: fruit } = req;
    const createdFruit = await _fruitService.createFruit(fruit);

    return res.status(201).send({
      ok: true,
      payload: createdFruit,
      version: 2.0
    });
  }

  async updateFruit(req, res) {
    const { fruitId } = req.params;
    const { body: fruit } = req;
    const updatedFruit = await _fruitService.updateFruit(fruitId, fruit);

    return res.send({
      ok: true,
      payload: updatedFruit,
      version: 2.0
    });
  }

  async deleteUser(req, res) {
    const { fruitId } = req.params;
    await _fruitService.deleteFruit(fruitId);

    return res.status(204).send({
      ok: true,
      payload: {
        message: "The fruit was deleted"
      },
      version: 2.0
    });
  }
}

export default new FruitController();
