"use client";

import FormFlow from "@/components/FormFlow";
import { getCookie } from "@/services/cookie.service";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AppliedPage() {
  const [userForms, setUserForms] = useState<any>([]);
    useEffect(() => {
      getStaffForm();
    }, []);
  const token = getCookie("usertoken");
    const router = useRouter();

    if (router.isFallback) {
    return <h1>Data is loading</h1>;
    }

    //   console.log(`Building slug: ${slug}`);


  const getStaffForm = async () => {
    try {
      const response = await axios.get("/api/form", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      setUserForms(data.data);
    } catch (err: any) {
      console.error(
        "Error fetching forms:",
        err.response ? err.response.data : err?.message
      );
    }
  };

  return (
    <div className="p-[16px]">
      {userForms.map((form: any) => (
        <div key={form.id}>
          <FormFlow form={form} />
        </div>
      ))}
    </div>
  );
}
