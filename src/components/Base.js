import React, { useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import "./main.css";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { Navbar, Typography, Button, Input } from "@material-tailwind/react";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import { MoonIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export const Base = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto max-w-screen-xl px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Flipkart Plus
          </Typography>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          <div className="prof">
            <div className="ml-auto flex gap-1 md:mr-4">
              <IconButton variant="text" color="white">
                <ShoppingCartIcon className="h-7 w-7" />
              </IconButton>
              <IconButton variant="text" color="white" className="px-4">
                <MoonIcon className="h-7 w-7" />
              </IconButton>
              <Menu>
                <MenuHandler className="profile">
                  <Button className="bg-blue-800 ">
                    <UserIcon className=" h-7 w-7" />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <a href="Mens">Mens</a>
                  <br/>

                  <a href="/Women">Women</a>
                  <br></br>
                  <a href="/Grossery">Grossery</a>
                  <br></br>
                  <a href="/">Logout</a>
                  <br></br>
                  <a href="/">Cart</a>
                  <br></br>
                </MenuList>
                         
              </Menu>
            </div>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="#">My Profile</MDBDropdownItem>
                <MDBDropdownItem href="#">Settings</MDBDropdownItem>
                <MDBDropdownItem href="#">Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>

          <div className="ml-auto flex gap-1 md:mr-4">
            {/* ... (existing code) */}
            <a href="/Login">Login</a>
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Base;
