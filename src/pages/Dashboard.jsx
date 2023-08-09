import axios from "axios";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempquote] = useState("");

  const populateQuote = async () => {
    const res = await axios.get("auth/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }); 
    const data = res;
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        populateQuote();
      }
    }
  }, []);
  const submitQuote =  async ()=>{
    const res = await axios.post("auth/api/quote", {
      headers: {
        "content-type":"application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body:{
        quote: tempQuote
      }
    });
    const data = res;
    if (data.status === "ok") {
      setTempquote("")
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }
  return (
    <>
      <div>quote : {quote || "no quote"}</div>
      <div>
        <form onSubmit={ submitQuote}>
            <input type="text" value={tempQuote} onChange={((e)=>{
                setTempquote(e.target.value)
            })} />
            <input type="submit" value="update Quote"/>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
