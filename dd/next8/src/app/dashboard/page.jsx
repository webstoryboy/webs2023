"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  //   const [data, setData] = useState([]);
  //   const [err, setErr] = useState(false);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //         cache: "no-store",
  //       });

  //       if (!res.ok) {
  //         setErr(true);
  //       }

  //       const data = await res.json();
  //       setData(data);
  //       setIsLoading(false);

  //       console.log(data);
  //     };
  //     getData();
  //   }, []);

  // console.log(data);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  console.log(data);

  if (session.status === "Loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div>Dashboard</div>;
  }
};

export default Dashboard;
