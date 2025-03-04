import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from '@material-ui/icons/Close';
import "./MenuPopup.css";

import {
    usePopupState,
    bindTrigger,
    bindMenu,
  } from 'material-ui-popup-state/hooks'
  
  const MenuPopupState = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
    return (
      <div>
         <MenuIcon {...bindTrigger(popupState)}/>        
        <Menu className="menu_popup" {...bindMenu(popupState)}> 
         <CloseIcon className="menu_close" onClick={popupState.close}/>      
         <span className="menu_span"><MenuItem className="menu_items" href="#">Home</MenuItem></span>
         <span className="menu_span"><MenuItem className="menu_items" href="#">Downloads</MenuItem></span>
         <span className="menu_span"><MenuItem className="menu_items" href="#">Stats</MenuItem></span>
         <span className="menu_span"><MenuItem className="menu_items" href="#">Blog</MenuItem></span>
        </Menu>
      </div>
    )
  }
  export default MenuPopupState
  