import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async findAllByOwner(ownerId: string): Promise<Todo[]> {
        const todos = await this.todoModel.find({ owner: ownerId }).exec();
        return todos;
    }

    async create(todo: Todo, user: User): Promise<Todo> {
        const data = Object.assign(todo, { owner: user._id });

        const res = await this.todoModel.create(data);
        return res;
    }

    async deleteById(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndDelete(id);
    }
}