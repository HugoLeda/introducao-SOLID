import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params
      const user = this.listAllUsersUseCase.execute({user_id})
      return response.json(user)
    } catch (err) {
      return response.status(400).json({ error: err })
    }
  }
}

export { ListAllUsersController };
