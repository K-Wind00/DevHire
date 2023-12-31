import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from 'src/lib/dto/sign-up.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(signUpDto: SignUpDto) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(signUpDto.password, salt);

    const user = this.userRepository.create({
      ...signUpDto,
      password: hashedPassword,
    });

    return await this.userRepository.save(user);
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username } });
  }

  async findOneByUsernameOrEmail(username: string, email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: [{ username }, { email }],
    });
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
