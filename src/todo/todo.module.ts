import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
  ],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
