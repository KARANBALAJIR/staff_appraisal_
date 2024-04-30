import { User, UserType, FormStatusType, DesignationType, StatusType, DepartmentType , GenderType } from '@prisma/client';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken';
import toast from 'react-hot-toast';

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
// "username": "",
//     "email": "mike@sece.ac.in",
//         "role": "ANONYMOUS",
//             "designation": "NONE",
//                 "department": "NONE",
//                     "phonenumber": "000-000-0000",
//                         "gender": "OTHER",
//                             "formstatus": "PENDING",
//                                 "status": "INACTIVE",
//                                     "isfirst": true

export interface UserDetails {
    username:string;
    email: string;
    role: UserType | null;
    designation: DesignationType | null;
    department: DepartmentType | null;
    phonenumber:number | null;
    formstatus: FormStatusType | null;
    status: StatusType | null;
    gender: GenderType | null;
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
        },
        // select:{
        //     password:false,
        //     id:false,
        //     createdAt:false,
        //     updatedAt:false,
        // }
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

async function verifyToken(token:string) : Promise<string | jwt.JwtPayload | boolean> {
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        return decoded;
    } catch(err){
        return false;
    }

}

// const toastSuccess = (message: string) => {
//     toast.success(message)
// }


// const toastWarning = (message: string) => {
//     // toast.warning(message)
// }

// const toastError = (message: string) => {
//     toast.error(message)
// }

export { hashPassword, findUserByEmail, createUser, emailTest, isCorrectPassword, generateToken , verifyToken }