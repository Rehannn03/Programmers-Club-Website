import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
export function Members() {
    const[members, setMembers] = React.useState([])
    let headersList = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     }
    async function fetchMembers() {
      axios.get('https://rehanns.github.io/Members-Data/members.json',{
        headers: headersList
      })
      .then(response => {
        setMembers(response.data)
      })
    }
    useEffect(()=>{
      fetchMembers()
    },[])
  return (
    <div className="bg-blue-300">
      {/* Page Header */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800  underline">
          Core Members 2023-2024
        </h1>
      </section>

      {/* Member Cards */}
      <section className="container mx-auto px-4 " >
        <Card details={members}/>
      </section>
    </div>
  );
} // Add a closing curly brace here
