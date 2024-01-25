import React, { useState } from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";
import './main.css';

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



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 
  return (
    <div className='mx-auto max-w-screen-xl'>



      
 
<div class part2>
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/7e6f7f22ab2b746f.jpg?q=20"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/039ec2390c9d9c67.jpeg?q=20"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/5f515750b4e4ec8e.jpeg?q=20"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

</div> 
<h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8'>
        TRENDING-PRODUCTS
      </h1>
      <hr></hr>
      <h1 className='h1'>Mens-Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Mens">
            <img
          src="https://th.bing.com/th?id=OPA.QsJIWKd9dVe11g474C474&w=165&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image"
        />
        </a>

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
              <a href="/Mens">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        
        <div className="card2">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-75">
            <a href="/Mens">
            <img
          src="https://th.bing.com/th?id=OPA.hLSogsj0JxXeTA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }} 
        />
        </a>

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
            <a href="/Mens">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Mens">
            <img
          src="https://th.bing.com/th?id=OPA.c%2ft0lJFXyN3RSQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image"style={{ height: '290px',width:'700px' }} 
        />
        </a>

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
            <a href="/Mens">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
      <br></br>
<h1 class="h1">Women-Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Women">
            <img
          src="https://th.bing.com/th?id=OPA.oGxXr2H4hLsvFw474C474&w=160&h=213&c=17&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Kurthis
              </Typography>
              <h3><b>899rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Women">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Women">
            <img
          src="https://th.bing.com/th?id=OPA.t3h5W%2bF26cerNg474C474&w=165&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Fashionable Saries
              </Typography>
              <h3><b>699rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Women">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Women">
            <img
          src="https://th.bing.com/th?id=OPA.zyalsKRQGyMD9w474C474&w=165&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Silk Saries
              </Typography>
              <h3><b>909rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Women">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        </div>
        <br></br>
        <br></br>
        <h1 class="h1">Electronics-Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Electronic">
            <img
          src="https://th.bing.com/th?id=OPA.a%2bJ%2bRePSh61DXA474C474&w=160&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Nokia mobie
              </Typography>
              <h3><b>6009rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Electronic">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        
        <div className="card2">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-75">
            <a href="/Electronic">
            <img
          src="https://th.bing.com/th?id=OPA.nk0hVMzUKH7PpQ474C474&w=160&h=220&c=17&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Washing Machine
              </Typography>
              <h3><b>9909rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
              
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Electronic">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Electronic">
            <img
          src="https://th.bing.com/th?id=OPA.zQC66mCB42AmIw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                MSI LAPTOP
              </Typography>
              <h3><b>49999rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Electronic">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
<br></br>
      <h1 class="h1">Grocery-Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Grossery">
            <img
          src="https://th.bing.com/th?id=OPA.1PlSPSaQFm5KOg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Onion Garrlic Paste
              </Typography>
              <h3><b>49999rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Grossery">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Grossery">
            <img
          src="https://th.bing.com/th?id=OPA.7Xson8YnjHGdpA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                RICE
              </Typography>
              <h3><b>499rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Grossery">
              <Button>Read More</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <a href="/Grossery">
            <img
          src="https://th.bing.com/th?id=OPA.XFVFmns9z22MfQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        /></a>

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                White-Paper
              </Typography>
              <h3><b>49rs</b></h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
            <a href="/Grossery">
              <Button>Read More</Button>
              </a>
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
          © 2023 Copyright:
          <a className='text-white' href='https://sweet-druid-839002.netlify.app/'>
           by  Jagadeeshgouda
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Header;
