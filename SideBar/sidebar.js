const { Component } = require("react")

import react  from 'react'

class SideBar extends React.Component{
    render()
    {
        return (
            <Sidebar width = {300}>
                <p>item 1</p>
                <p>item 2</p>
                <p>item 3</p>
            </Sidebar>
        )
    }
}

export default SideBar;