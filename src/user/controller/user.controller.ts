import { Controller, Get, Post, Put, Patch, Delete, Body } from '@nestjs/common';
import { UserDto }    from 'src/user/dto/user.dto';
import { UserService} from 'src/user/service/user.service';

@Controller('user')
export class UserController 
{
    constructor (private readonly userService: UserService){}

    @Get()
    findByEmail(email: string): UserDto
    {
        return this.userService.findByEmail( email );
    } 

    @Post()
    register(@Body() userDto: UserDto): number
    {
        return 1;
    }

    @Post()
    login(@Body() userDto: UserDto): string
    {
        let token: string = '';

        let email:    string = userDto.email;
        let password: string = userDto.password;

        if ( email && password )
        {
            token = this.userService.login( email, password );
        }

        return token;
    }
}
