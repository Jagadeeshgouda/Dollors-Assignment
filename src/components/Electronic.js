import React from 'react'
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

const Electronic = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <h1 class="h1">Electronic-Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://lh3.googleusercontent.com/spp/AE_ITi0RweK6YcVM3OfjwMsPKn3q7DL2Hag_7127BuiuwfNkjhVK9Pf8DuFkQ7yb7nCVyo4ib4Z5xnreCLxwVHab6PYn8H1EDHrtSoxqljzmO11GbtjbHbLyMociPg5atqkqGPqlRr9-ej2Ope8XK75BZ6CVw-5Wr00bLfZNrdZhfrbE-HpjB-Ra0ENVU4m4oiP8y_zXiNb_=s512-rw-pd-pc0x00ffffff"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Apple iPhone 14 (Midnight, 128 GB)
              </Typography>
              <h3><b>₹57,999</b></h3>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione quod at optio culpa in debitis fuga, nobis corporis pariatur ipsa alias, mollitia asperiores, rem voluptates impedit exercitationem 
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
          src="https://m.media-amazon.com/images/I/71amoFTEyGL.jpg"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              vivo T2x 5G (Marine Blue, 128 GB)  (6 GB RAM)
              </Typography>
              <h3><b>₹12,999</b></h3>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, recusandae! Corrupti suscipit sunt delectus sequi veritatis ea fuga blanditiis nostrum id commodi architecto quisquam 
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
          src="https://m.media-amazon.com/images/I/41LhE9k8QlL._AC_UF1000,1000_QL80_.jpg"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              MOTOROLA g54 5G (Pearl Blue, 128 GB)  (8 GB RAM)
              </Typography>
              <h3><b>₹13,999</b></h3>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi non sit dicta porro! Cupiditate eius neque veritatis beatae harum facilis. Atque nemo debitis aut consequuntur amet ad odit modi!
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
        </div>
    </div> 
  );
}

export default Electronic;
