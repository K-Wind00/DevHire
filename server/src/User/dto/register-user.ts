import { IsString, IsEmail } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;

}