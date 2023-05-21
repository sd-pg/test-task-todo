import {
    IsEmpty,
    IsNotEmpty,
    IsString,
} from 'class-validator';
import { User } from '../../auth/schemas/user.schema';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsEmpty({ message: 'You cannot pass user id' })
    readonly owner: User;
}