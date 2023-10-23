import mongoose from "mongoose";
export declare function connectToMongoDB(connectionString: string): void;
export declare function connectToFilipayDB(connectionString: string): mongoose.Connection;
