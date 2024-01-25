import { Carousel, IconButton } from "@material-tailwind/react";
import "./main.css";
import React, { useState } from "react";
import "./main.css";

import { Button, Input } from "@material-tailwind/react";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { Navbar, Typography } from "@material-tailwind/react";

export const Mens = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <h1 className="h1">Mens-Fashion</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="card1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-70">
              <img
                src="https://4.imimg.com/data4/AA/HC/MY-26596027/men-s-fancy-t-shirt.jpg"
                alt="card-image" height="100px"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                T-shirt
              </Typography>
              <h3>
                <b>399rs</b>
              </h3>
              <Typography>
                A blazer is a type of jacket resembling a suit jacket, but cut
                more casually. A blazer is generally distinguished from a sport
                coat as a more formal garment
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="card2">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-75">
              <img
                src="https://5.imimg.com/data5/TU/UV/SB/SELLER-55585817/branded-tshirt.jpg"
                alt="card-image"
                style={{ height: "330px", width: "700px" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                T-Shirt
              </Typography>
              <h3>
                <b>399rs</b>
              </h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
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
                src="https://5.imimg.com/data5/DK/JV/MY-34278/men-27s-fashion-tshirts.jpg"
                alt="card-image"
                style={{ height: "330px", width: "700px" }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                T-Shirt
              </Typography>
              <h3>
                <b>499rs</b>
              </h3>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <MDBFooter className="bg-light text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>
        <MDBBtn
          floating
          className="m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className='text-white' href='https://sweet-druid-839002.netlify.app/'>
           by  Jagadeeshgouda
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Mens;
