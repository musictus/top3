import React from "react";
import {SideNav, SideNavItem, Button} from 'react-materialize'



function SideNavigator() {
    return (

        <SideNav
            trigger={
                <Button floating large className='orange' waves='light' icon='list'></Button>
            }
            options={{ closeOnClick: true }}
            >
            <SideNavItem userView
                user={{
                background: '/assets/images/food_back.png',
                image: '/assets/images/headshot.png',
                name: 'Sung Joo Hong',
                email: 'musictus@gmail.com'
                }}
            />
            <SideNavItem href='/' icon='search'>Search Food</SideNavItem>
            <SideNavItem divider />
            <SideNavItem waves href='/contact' icon='fastfood'>Suggest Your Restaurant!</SideNavItem>
            <SideNavItem divider />
            <SideNavItem href='/ourstory' icon='face'>Our Story</SideNavItem>
            <SideNavItem href='/ourstory' icon='mail_outline'>Contact Us</SideNavItem>
            <SideNavItem href='/ourstory' icon='lock_open'>Sign Out</SideNavItem>
            {/* <SideNavItem subheader>Subheader Placeholder</SideNavItem> */}
        </SideNav>

);
}

export default SideNavigator;