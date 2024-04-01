import { User, UserType, FormStatusType, DesignationType } from '@prisma/client';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

interface UserFromSignUp{
    email: string;
    role: UserType | null;
    formstatus: FormStatusType | null;
    isfirst: boolean | null;
    designation:DesignationType | null;
}

interface JwtData{
    email:string,
    role:UserType | null,
    designation:DesignationType | null,
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
            designation:true,
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
    const hashedPassword = await bcrypt.hash(params,parseInt(process.env.SALT as string)); 
    return hashedPassword  
}

async function isCorrectPassword(password: string, hashedPassword: string) : Promise<boolean>{
    const result = await bcrypt.compare(password, hashedPassword)
    return result;
}

async function generateToken(jwtData : JwtData ): Promise<string> {
    const token =  jwt.sign(jwtData,process.env.SECRET_KEY as string)
    return token;
}

export { hashPassword, findUserByEmail, createUser, emailTest, isCorrectPassword, generateToken }