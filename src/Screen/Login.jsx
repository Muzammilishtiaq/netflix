import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Input } from "../Compnents/Single/Userinput";

function Login() {
  return (
    <Layout>
<div className="container mx-auto px-2 my-24 flex-colo">
  <div className="w-full 2xl:w-2/5 md:w-3/5 flex-colo gap-4 p-14 bg-dry rounded-lg border border-border">
    <img src="https://netflixo.vercel.app/images/logo.png" alt="" className="w-full h-12 object-contain" />
<Input lable="Email" placeholder="netflix@gmail.com" type="Email" bg={true}/>
<Input lable="Password" placeholder="*****" type="Password" bg={true}/>
<Link to="/dashboard" className="bg-submain transition hover:bg-main  p-4 w-full flex justify-center gap-2 rounded-lg hover:border-submain hover:border-2 text-white"><FiLogIn className="my-1 mx-2"/> Sign In</Link>
<p className="text-center text-border">Don't have an account? 
<Link to="/Register" className="text-dryGray font-semibold ml-2">Sign up</Link>
</p>
  </div>
</div>
    </Layout>
  );
}

export default Login;