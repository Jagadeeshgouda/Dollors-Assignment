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



export const Women = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
        <br></br>
<h1 class="h1">Women-Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://assets0.mirraw.com/images/11782209/3304364_long_webp.webp?1692944731"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Printed Kurthi
              </Typography>
              <h3><b>899rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/u/i/b/3xl-teal-blue-006-asagar-original-imagky4zzwzczjnd.jpeg?q=70&crop=false"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Embroidered Kurthi
              </Typography>
              <h3><b>699rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvgwkFXoZg7t0eevDaCQbPncUjNIYaHUl6A&usqp=CAU"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Jeens Kurthi
              </Typography>
              <h3><b>909rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
        </div>
        <br></br>
        <br></br>
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
export default Women;
