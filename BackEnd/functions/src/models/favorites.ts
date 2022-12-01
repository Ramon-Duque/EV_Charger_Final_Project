import { ObjectId } from "mongodb";

export default interface Favorite {
    _id?: ObjectId;
    name: string;
    address: string;
    
}