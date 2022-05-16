import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const { admin, ...user } = this.usersRepository.findById(user_id)

    if (!user) {
      throw new Error("User with this id not found")
    }

    if (!admin) {
      throw new Error("User without admin permission")
    }
    
    const allUsers = this.usersRepository.list()

    return allUsers
  }
}

export { ListAllUsersUseCase };
