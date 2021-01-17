import { Injectable } from '@nestjs/common';
import { UserDto }    from 'src/user/dto/user.dto';

@Injectable()
export class UserService 
{
    public users: UserDto[] = [];

    // ---------------------------
    // - GET  -- Read methods
    // ---------------------------

    findByEmail (email: string): UserDto
    {
        let user: UserDto;

        
        return new UserDto();
    }

    // ---------------------------
    // - POST -- Create methods
    // ---------------------------

    register (user: UserDto): UserDto
    {
        return user;
    }

    login (email: string, password: string): string
    {
        return 'token';
    }
}
