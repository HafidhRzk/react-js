import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "../assets/css/Sidebar.css"

export default function SidebarNav() {
    return (
        <Sidebar className='sidebar' backgroundColor='white'>
            <Menu
                menuItemStyles={{
                    button: {
                        [`&.active`]: {
                            backgroundColor: "blue",
                            color: "black",
                        },
                    },
                }}
            >
                <MenuItem> Dashboard </MenuItem>
                <SubMenu label="Master Data">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <SubMenu label="Metadata">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}