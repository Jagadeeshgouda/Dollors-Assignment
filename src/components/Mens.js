
import { Carousel, IconButton } from "@material-tailwind/react";
import './main.css';
import React, { useState } from 'react';
import './main.css';


import {
  Button,
  Input,
} from "@material-tailwind/react";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';



import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import {
  Navbar,
  Typography,
} from "@material-tailwind/react";



export const Mens = () => {
  return (
    <div>
 <h1 className='h1'>Mens-Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://th.bing.com/th?id=OPA.QsJIWKd9dVe11g474C474&w=165&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image"
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Blazer
              </Typography>
              <h3><b>399rs</b></h3>
              <Typography>
              A blazer is a type of jacket resembling a suit jacket, but cut more casually. A blazer is generally distinguished from a sport coat as a more formal garment
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="card2">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-75">
            <img
          src="https://th.bing.com/th?id=OPA.hLSogsj0JxXeTA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }} 
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                T-Shirt
              </Typography>
              <h3><b>399rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
  
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://th.bing.com/th?id=OPA.c%2ft0lJFXyN3RSQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image"style={{ height: '290px',width:'700px' }} 
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Jacket 
              </Typography>
              <h3><b>499rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
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


<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
        </div>
  )
}
export default Mens;
