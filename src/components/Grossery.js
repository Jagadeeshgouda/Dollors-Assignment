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
    <div className='mx-auto max-w-screen-xl'>
      <h1 class="h1">Grocery-Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
            <img
          src="https://www.bigbasket.com/media/uploads/p/l/267985_3-mtr-masala-garam.jpg?tr=w-1080,q=80"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              MTR Masala - Garam, 50 g Pouch
              </Typography>
              <h3><b>₹48</b></h3>
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
          src="https://www.bigbasket.com/media/uploads/p/l/40001451_6-mtr-masala-sambar-powder.jpg?tr=w-1080,q=80"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              MTR Masala - Sambar Powder, 200 g Pouch
              </Typography>
              <h3><b>₹135</b></h3>
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
          src="https://www.bigbasket.com/media/uploads/p/l/268042_7-mtr-powder-cumin.jpg?tr=w-1080,q=80"
          alt="card-image" style={{ height: '290px',width:'700px' }}
        />

            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              MTR Powder - Cumin, 100 g Pouch
              </Typography>
              <h3><b>₹135</b></h3>
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
    </div>
  )
}

export default Grossery
