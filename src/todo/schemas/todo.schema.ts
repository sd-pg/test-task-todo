import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema()
export class Todo {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;

    @Prop()
    title: string;

    @Prop()
    description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);