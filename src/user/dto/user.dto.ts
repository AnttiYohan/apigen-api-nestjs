import { IsDate, IsNumber, IsString } from "class-validator";

export class UserDto 
{
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsDate()
    created_at: Date;
}
