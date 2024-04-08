import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true, // Add centerMode to adjust spacing
    centerPadding: "60px", // Adjust the spacing as per your preference
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Heading
        color={"rgb(64, 112, 244)"}
        textAlign={"center"}
        fontSize={"45px"}
      >
        Projects
      </Heading>
      <br />

      <Box  
       
      borderRadius={"10px"}
      // border={"1px solid red"}
       w={"96%"} m={"auto"} id="Projects" bg="rgb(26, 32, 44)" className="slider-container">
        <Slider {...settings} style={{ overflow: "hidden"}} >
          <Box
            
            p={{
              base: 22,
              sm: 20,
              md: 12,
              lg: 10,
              xl: 10,
              "2xl": 10,
            }}
          >
            <Card 
            //  overflow={"hidden"}
              w={{
                base: "250px",
                sm: "290px",
                md: "290px",
                lg: "300px",
                xl: "350px",
              }}
              borderRadius={"20px"}
              maxW="sm"
            >
              <CardBody>
                <Image src="\boat.png" alt="Boat" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading textAlign={"center"} size="md">
                    Boat-LifeStyle Clone
                  </Heading>
                  <Text textAlign={"center"}>
                    {/* BoAt Lifestyle Clone is a replica of the BoAt Lifestyle
                    website developed for a Construct Week Project. */}
                    Crafted an online electronic products shopping app, allowing
                    users to browse and purchase items.
                  </Text>

                  <Text textAlign={"center"}>
                    Tech stack - React | Chakra-UI | React-Router-Dom | Local
                    Storage | Git
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter m={"auto"}>
                <ButtonGroup spacing="2">
                  <Link
                    href="https://boat-life-style-clone.vercel.app/"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Live Demo
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/iamnaveen8851/Boat-Life-Style-Clone"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Github
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
          <Box
            p={{
              base: 22,
              sm: 20,
              md: 12,
              lg: 10,
              xl: 10,
              "2xl": 10,
            }}
          >
            <Card
              w={{
                base: "250px",
                sm: "290px",
                md: "290px",
                lg: "300px",
                xl: "350px",
              }}
              borderRadius={"20px"}
              maxW="sm"
            >
              <CardBody>
                <Image src="\yts.png" alt="yts" borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading textAlign={"center"} size="md">
                    YTS.MX Movie-Website-Clone
                  </Heading>
                  <Text textAlign={"center"}>
                    It provides a platform for users to browse movies and their
                    respective details online conveniently.
                  </Text>

                  <Text textAlign={"center"}>
                    Tech stack - React | Chakra-UI | React-Router-Dom | Git
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter m={"auto"}>
                <ButtonGroup spacing="2">
                  <Link
                    href="https://yts-mx-movie-app.vercel.app/login"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Live Demo
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/iamnaveen8851/YTS_MX-MOVIE-APP"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Github
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
          <Box
            p={{
              base: 22,
              sm: 20,
              md: 12,
              lg: 10,
              xl: 10,
              "2xl": 10,
            }}
          >
            <Card
              w={{
                base: "250px",
                sm: "290px",
                md: "290px",
                lg: "300px",
                xl: "350px",
              }}
              borderRadius={"20px"}
              maxW="sm"
            >
              <CardBody>
                <Image
                  src="\Learning.png"
                  alt="Learning Exp"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading textAlign={"center"} size="md">
                    Learning Exp-Clone
                  </Heading>
                  <Text textAlign={"center"}>
                    Learning-Exp Clone is a replica of the Learning Exp UI
                    website developed for a purpose of mimic it .
                  </Text>

                  <Text textAlign={"center"}>
                    Tech stack - React | Chakra-UI | React-Router-Dom | Git
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter m={"auto"}>
                <ButtonGroup spacing="2">
                  <Link
                    href="https://learning-exp-landing-page.vercel.app/"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Live Demo
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/iamnaveen8851/Learning_Exp.Landing_Page"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Github
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>

          <Box
            p={{
              base: 22,
              sm: 20,
              md: 12,
              lg: 10,
              xl: 10,
              "2xl": 10,
            }}
          >
            <Card
              w={{
                base: "250px",
                sm: "290px",
                md: "290px",
                lg: "300px",
                xl: "350px",
              }}
              borderRadius={"20px"}
              maxW="sm"
            >
              <CardBody>
                <Image
                  src="\brightline.png"
                  alt="Brightline"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading textAlign={"center"} size="md">
                    BrightLine-Clone
                  </Heading>
                  <Text textAlign={"center"}>
                    It provides a platform for users to browse solutions and
                    their respective details of mental diseases online
                    conveniently.
                  </Text>

                  <Text textAlign={"center"}>
                    Tech stack - HTML | CSS | JavaScript | Local Storage | Git
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter m={"auto"}>
                <ButtonGroup spacing="2">
                  <Link
                    href="https://cw-project-brightline.netlify.app/"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Live Demo
                    </Button>
                  </Link>

                  <Link
                    href="https://github.com/iamnaveen8851/Brightline-Clone"
                    isExternal
                  >
                    <Button variant="solid" colorScheme="blue">
                      Github
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </Slider>
      </Box>
    </>
  );
};

export default Projects;
