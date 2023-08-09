import axios from "axios";

export const Signup = async (name, email, password,e) => {
  
  try {
    const response = await axios.post(
      "auth/register",
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    if(data.status ==="ok"){
      window.location.href="/login"
    }
  } catch (error) {
    console.error(error);
  }
};

export const Signin = async (email, password) => {
  try {
    const response = await axios.post(
      "auth/login",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data =await response.data
    if(data.token){
      localStorage.setItem("token", data.token)
      alert("login succ")
      window.location.href="/main"
    }
    else{
      alert("please check username or password")
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
