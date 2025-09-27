"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ClientUserDetails = () => {
  const params = useParams();

  const { data, error, isLoading } = useSWR(
    params.details ? `https://dummyjson.com/users/${params.details}` : null,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user details.</div>;
  if (!data) return null;

  return (
    <div>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <p>Age: {data.age}</p>
      <p>Birth Date: {data.birthDate}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export default ClientUserDetails;
