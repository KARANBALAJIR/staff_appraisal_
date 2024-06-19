import { NextApiRequest } from "next";
import { User } from "@prisma/client";

declare module "next" {
    export interface NextApiRequest {
        user?: User;
    }
}