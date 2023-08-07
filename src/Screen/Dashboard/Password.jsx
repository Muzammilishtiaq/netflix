import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../Compnents/Single/Userinput'

function Password() {
  return (
<SideBar>
    <h1 className='text-white font-medium text-xl'>Change Password</h1>
    <div className="py-4 flex flex-col gap-y-5">
    <Input lable="Previous Password" type="Password" placeholder="******" bg={true}/>
    <Input lable="New Password" type="Password" placeholder="******" bg={true}/>
    <Input lable="Confirm Password" type="Password" placeholder="******" bg={true}/>
   <div className="flex justify-end">
   <button className="text-lg border border-submain  text-white font-bold rounded-md px-4 py-3">Change Password</button>
   </div>
    </div>
</SideBar>
  )
}

export default Password
