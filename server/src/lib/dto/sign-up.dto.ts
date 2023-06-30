import { IsString, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;

}