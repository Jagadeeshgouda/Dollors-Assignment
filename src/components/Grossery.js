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

const Grossery = () => {
  return (
    <div>
      <h1 class="h1">Grocery-Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://th.bing.com/th?id=OPA.1PlSPSaQFm5KOg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

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
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://th.bing.com/th?id=OPA.7Xson8YnjHGdpA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

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
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card3">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://th.bing.com/th?id=OPA.XFVFmns9z22MfQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

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
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        </div>
    </div>
  )
}

export default Grossery
