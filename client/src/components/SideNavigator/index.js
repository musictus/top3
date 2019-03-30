import React from "react";
import {SideNav, SideNavItem, Button} from 'react-materialize'
import "./style.css";
import ModalForm from "../../components/ModalForm";

const modalTrigger = () => {
    return <span align="left">Suggest Your Restaurant!</span>
}

function SideNavigator(props) {
    
    return (

        <SideNav
            trigger={ <Button floating large className='#ff7043 deep-orange lighten-1' id='button' icon='list'></Button> }
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
            
            {/* <SideNavItem divider />
            <SideNavItem waves icon='fastfood'>
                <ModalForm trigger={modalTrigger}></ModalForm>
            </SideNavItem> */}

            <SideNavItem divider />
            <SideNavItem href='/ourstory' icon='face'>Our Story</SideNavItem>
            <SideNavItem href='/ourstory' icon='mail_outline'>Contact Us</SideNavItem>
            <SideNavItem href='/ourstory' icon='lock_open'>Sign Out</SideNavItem>
            {/* <SideNavItem subheader>Subheader Placeholder</SideNavItem> */}
        </SideNav>

);
}

export default SideNavigator;