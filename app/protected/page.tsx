"use client";
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/hello");
      const json = await res.json();
      setData(json);
    })();
  }, []);
  console.log("data", data);
  return (
    <>
      <h1>Protected Page!</h1>
      <p>Data: {JSON.stringify(data)}</p>
    </>
  );
}
