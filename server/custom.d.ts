declare namespace Express {
    export interface Request {
       authToken?: string
       user?: import("mongoose").Document
    }
 }