import { clerkClient } from "@clerk/nextjs";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        try {
            const users = await clerkClient.users.getUserList();
            return res.status(200).json({ success: true, message: 'all user data', users });
        } catch (error) {
            console.error("An error occurred:", error);
            return res.status(500).json({ success: false, message: "An error occurred while processing the request." });
        }
    }

    if (req.method === "POST") {
        const { emailAddress, username, role, designation, department, phoneNo, gender } = req.body;
        try {
            if (!emailAddress) {
                return res.status(400).json({ status: false, message: 'enter email address' })
            }
        
            const userObject = {
                emailAddress: [emailAddress],
                username,
            }

            let status = "active"

            const userCreationResponse: any = await clerkClient.users.createUser(userObject);

            const userId: string = userCreationResponse.id as string;

            await clerkClient.users.updateUserMetadata(userId, {
                publicMetadata: {
                    role,
                    status,
                    designation,
                    department,
                    phoneNo,
                    gender,
                    isFirst:true,
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
            const { emailAddress, role,designation, department, userID } = req.body;

            if (!emailAddress) {
                return res.json({ message: "Missing required parameters." });
            }
            if (userID) {
                await clerkClient.users.updateUserMetadata(userID, {
                    publicMetadata: { role, department , designation}
                });
                return res.json({ success: true });
            }

            const userListResponse = await clerkClient.users.getUserList({ emailAddress: [emailAddress] });

            if (!userListResponse || userListResponse.length === 0) {
                return res.json({ message: "No user found with the provided email address." });
            }

            const userId = userListResponse[0].id;
            await clerkClient.users.updateUserMetadata(userId, {
                publicMetadata: { department, designation, role }
            });

            return res.json({ success: true });

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