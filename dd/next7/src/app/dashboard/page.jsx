"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U",
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
