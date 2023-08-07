import React from 'react'
import SideBar from '../SideBar'
import UserdataTable from '../../../Compnents/UserdataTable'

function User() {
  return (
<SideBar>
<div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Users</h2>
        </div>
        <UserdataTable  />
      </div>
</SideBar>
  )
}

export default User
