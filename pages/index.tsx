import Helmet from "@/components/Helmet";
import { useEffect, useState } from "react";

const API_KEY = "bf337bf14426b2433da0e98951939ed8";

export default function Home() {
  return (
    <div>
      <Helmet title="home" />
      <h1>Hello</h1>
    </div>
  );
}
