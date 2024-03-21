import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        try {
            const {emailAddress , userId} = req.body;
            if(userId){
                const users = await clerkClient.users.getUserList();
            }   
            // return res.status(200).json({ success: true, message: 'all user data', users });
        } catch (error) {
            console.error("An error occurred:", error);
            return res.status(500).json({ success: false, message: "An error occurred while processing the request." });
        }
    }

    if (req.method === "POST") {
        const { emailAddress,designation, department, phoneNo, gender , userId} = req.body;
        try {
            if (!emailAddress) {
                return res.status(400).json({ status: false, message: 'enter email address' })
            }
            
            const status = 'inactive'
            await clerkClient.users.updateUserMetadata(userId, {
                publicMetadata: {
                    designation,
                    status,
                    department,
                    phoneNo,
                    gender
                }
            })

            return res.status(200).json({ success: true, message: 'user created successfully' });
        }
        catch (err: any) {
            return res.status(500).json({ success: false, message: err.message })
        }
    }


    if (req.method === 'PATCH') {
        try {
            const { emailAddress, department, phoneNo, gender,userID } = req.body;

            if (!emailAddress) {
                return res.json({ message: "Missing required parameters." });
            }

            if (!userID) {
                return res.json({ message: "No user found with the provided email address." });
            }
            await clerkClient.users.updateUserMetadata(userID, {
                publicMetadata: { department, phoneNo, gender }
            });
            return res.json({ success: true, message: 'profile successfully updated' });
            // const userListResponse = await clerkClient.users.getUserList({ emailAddress: [emailAddress] });

            // if (!userListResponse || userListResponse.length === 0) {
            //     return res.json({ message: "No user found with the provided email address." });
            // }

            // const userId = userListResponse[0].id;

            // await clerkClient.users.updateUserMetadata(userId, {
            //     publicMetadata: { department, phoneNo, gender }
            // });

        } catch (error) {
            console.error("An error occurred:", error);
            return res.json({ message: "An error occurred while processing the request." });
        }
    }


    if (req.method === 'DELETE') {
        const { userId } = req.body;
        try {
            const user = await clerkClient.users.deleteUser(userId);
            return res.status(200).json({ success: true, message: 'user deleted successfully' })
        } catch (err: any) {
            return res.status(500).json({ success: false, message: err.message })
        }
    }

}