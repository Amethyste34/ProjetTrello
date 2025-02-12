import { BSON, ObjectSchema, Realm } from 'realm';

// Define my object model
export class Task extends Realm.Object<Task> {
    _id: BSON.ObjectId = new BSON.ObjectId();
    description!: string;
    isComplete: boolean = false;
    createdAt: Date = new Date();
    user_id!: string;

    static primaryKey = '_id';
}