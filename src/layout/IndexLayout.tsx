import React from 'react'
import { Outlet } from "react-router-dom";
const IndexLayout = () => {
    return (
        <>
            <div> this is header  </div>
            <Outlet />
            <div> this is footer </div>
        </>
    )
}

export default IndexLayout
