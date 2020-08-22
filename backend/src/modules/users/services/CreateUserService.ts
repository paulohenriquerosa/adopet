import { inject, injectable } from 'tsyringe';

import AppError from '@shared/error/AppError';
import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExistent = await this.usersRepository.findByEmail(email);

    if (checkUserExistent) {
      throw new AppError('E-mail already exist');
    }
    const user = await this.usersRepository.create({ name, email, password });
    return user;
  }
}

export default CreateUserService;
