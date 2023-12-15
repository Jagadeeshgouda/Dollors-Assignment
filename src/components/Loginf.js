import './main.css';

import {
    Checkbox,
  } from "@material-tailwind/react";
  import React, { useState } from 'react';
  import { Carousel, IconButton } from "@material-tailwind/react";
  import './main.css';
  import { Link } from 'react-router-dom';
  import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import {  UserIcon} from "@heroicons/react/24/solid";
  
  import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
  
  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
  
  import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  
  import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
  import { MoonIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
  
  
  
export const Loginf = () => {
  return (
    <div>
<div className='log'>
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign In
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                <div className="ml-auto flex gap-1 md:mr-4">
          {/* ... (existing code) */}
          <Link to="/Register">Sign up</Link>
        </div>
                  
                </Typography>
              </Typography>
            </CardFooter>
          </Card>

</div>

          <MDBFooter className='bg-light text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
            
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBBtn floating className='m-1' style={{ backgroundColor: '#3b5998' }} href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

<div class="logf">
<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='https://sweet-druid-839002.netlify.app/'>
           by  Jagadeeshgpoda
          </a>
          </div>
        </div>
      </MDBFooter>
          </div>
        );
      }

      export default Loginf;