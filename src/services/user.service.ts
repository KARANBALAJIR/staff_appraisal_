import {User,UserType,FormStatusType} from '@prisma/client';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserFromSignUp{
    email: string;
    role: UserType | null;
    formstatus: FormStatusType | null;
    isfirst: boolean | null;
}

async function createUser(email: string,password:string): Promise<UserFromSignUp | null> {
    const newUser =  await prisma.user.create({
        data: {
            email,
            password,
        },
        select: {
            email: true,
            role: true,
            isfirst: true,
            formstatus: true,
        }
    })
    return newUser;
}

async function emailTest(params:string) : Promise<boolean> {
    const emailRegex = /^[^\s@]+@sece\.ac\.in$/;
    return emailRegex.test(params);
}

async function findUserByEmail(params: string) : Promise<User | null>{
    const user = await prisma.user.findUnique({
        where: {
            email: params,
        }
    });
    return user;
}

async function hashPassword(params:string) : Promise<string> {
    const hashedPassword = await bcrypt.hash(params, parseInt(process.env.SALT)); 
    return hashedPassword  
}

async function isCorrectPassword(password: string, hashedPassword: string) : Promise<boolean>{
    const result = await bcrypt.compare(password, hashedPassword)
    return result;
}

export { hashPassword, findUserByEmail, createUser, emailTest, isCorrectPassword }