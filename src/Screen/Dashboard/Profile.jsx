import React from 'react'
import SideBar from './SideBar';
import Uploder from '../../Compnents/Uploder';
import { Input } from '../../Compnents/Single/Userinput';

function Profile() {
  return (
<SideBar>
  <div className="flex flex-col gap-6">
  <h2 className='text-xl font-bold'>Profile</h2>
  <Uploder/>
  <Input lable="FullName" placeholder="Netflixo React Tailwind" type="text" bg={true}/>
  <Input lable="Email" placeholder="netflixo@gmail.com" type="Email" bg={true}/>
  <div className="flex justify-between">
    <button className="bg-submain text-white text-lg font-bold rounded-md px-4 py-3">Delete Account</button>
    <button className="text-lg border border-submain  text-white font-bold rounded-md px-4 py-3">Update Profile</button>
  </div>
  </div>
</SideBar>
  )
}

export default Profile;
