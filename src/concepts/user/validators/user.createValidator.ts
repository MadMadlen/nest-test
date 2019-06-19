import { IsString, IsEmail } from 'class-validator';

export class CreateUserValidator {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;
}
