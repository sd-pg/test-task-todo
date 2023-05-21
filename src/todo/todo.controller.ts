import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schemas/todo.schema';
import { CreateTodoDto} from "./dto/create-todo.dto";
import { AuthGuard } from '@nestjs/passport';
import { Request as ExpressRequest } from 'express';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get('/get')
    @UseGuards(AuthGuard())
    async getAllTodos(@Request() req): Promise<Todo[]> {
        const userId = req.user._id;
        return this.todoService.findAllByOwner(userId);
    }

    @Post('/create')
    @UseGuards(AuthGuard())
    async createTodo(
        @Body()
            todo: CreateTodoDto,
        @Request() req,
    ): Promise<Todo> {
        return this.todoService.create(todo, req.user);
    }

    @Delete('delete/:id')
    @UseGuards(AuthGuard())
    async deleteBook(
        @Param('id')
            id: string,
    ): Promise<Todo> {
        return this.todoService.deleteById(id);
    }
}
