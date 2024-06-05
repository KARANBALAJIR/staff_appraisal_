import React, { useState, useEffect } from "react";
import axios from "axios"
import { getCookie } from "@/services/cookie.service";
import FormApproval from "../FormApproval";


interface HodApprovalProps {

}

const HodApproval: React.FC<HodApprovalProps> = (props) => {

        const [hodApprovalData, setHodApprovalData] = useState([]);

        useEffect(() => {
            fetchHodApprovalData();
        }, [])

        const fetchHodApprovalData = async () => {
            const token = getCookie('usertoken')
            try {
                const response = await axios.get('http://localhost:3000/api/user/hod/approval', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                setHodApprovalData(response.data.data)
            } catch (err: any) {
                console.log(err.response)
            }
        }
    return (
        <>
            <div className="flex flex-col gap-[16px]">

                    {
                        hodApprovalData.length === 0 ? <>No form found</> :
                            hodApprovalData && hodApprovalData.map((data, index) => {
                                return (
                                    <>
                                        <FormApproval form={data} />
                                    </>
                                )
                            })
                    }
            </div>

        </>
    )
}

export default HodApproval;

// export default function ApprovalPage() {

//     const [hodApprovalData, setHodApprovalData] = useState([]);

//     useEffect(() => {
//         fetchHodApprovalData();
//     }, [])

//     const fetchHodApprovalData = async () => {
//         const token = getCookie('usertoken')
//         try {
//             const response = await axios.get('http://localhost:3000/api/user/hod/approval', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                 }
//             })
//             setHodApprovalData(response.data.data)
//         } catch (err: any) {
//             console.log(err.response)
//         }
//     }

//     return (
//         <>
//             <section id="approval forms for hod" className=" p-[16px]">
//                 <div className="flex flex-col gap-[16px]">
//                     {
//                         hodApprovalData && hodApprovalData.map((data, index) => {
//                             return (
//                                 <>
//                                     <TempCard formId={index} details={data} />
//                                 </>
//                             )
//                         })
//                     }
//                 </div>
//             </section>

//         </>
//     )
// }