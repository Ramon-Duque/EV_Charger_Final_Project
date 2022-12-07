import { ObjectId } from "mongodb";

export default interface Restaurants{
    _id?: ObjectId;
    name: string;
    latitude: number;
    longitude: number;
}