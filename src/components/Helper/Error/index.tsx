import React from "react";

interface ErrorProps {
  error: any;
}

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};

export default Error;
