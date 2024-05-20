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
  SimpleGrid,
} from "@chakra-ui/react";
const Projects = () => {
  return (
    <>
      <Heading
        color={"rgb(64, 112, 244)"}
        textAlign={"center"}
        fontSize={"45px"}
        _hover={{
          transform: "scale(1.1)",
          transition: "transform 0.3s ease",
        }}
      >
        Projects
      </Heading>
      <br />

      <SimpleGrid
        w="95%"
        // border={"1px solid black"}
        id="Projects"
        justifyContent={"space-around"}
        alignItems={"center"}
        gap="20px"
        m="auto"
        
        columns={{
          base: "1",
          sm: "1",
          md: "2",
          lg: "3",
          xl: "3",
          "2xl": "3",
        }}
      >
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
            borderRadius={"20px"}
            maxW="sm"
          >
            <CardBody>
              <Image
                src="\asos-app-frontend.png"
                alt="Brightline"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading textAlign={"center"} size="md">
                  Asos-Clone
                </Heading>
                <Text textAlign={"center"}>
                  Asos is a online ecommerce website for users to browse
                  products and buy conveniently.
                </Text>

                <Text textAlign={"center"}>
                  Tech stack - MERN | React | Chakra UI | React-Router-Dom |
                  Local Storage | Git |
                </Text>
              </Stack>
            </CardBody>

            <CardFooter m={"auto"}>
              <ButtonGroup spacing="2">
                <Link href="https://asos-app-frontend.vercel.app/" isExternal>
                  <Button variant="solid" colorScheme="blue">
                    Live Demo
                  </Button>
                </Link>

                <Link
                  href="https://github.com/iamnaveen8851/asos_app-frontend"
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            //  overflow={"hidden"}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
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

        {/* Flipkart */}
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
            borderRadius={"20px"}
            maxW="sm"
          >
            <CardBody>
              <Image src="\flipkart.png" alt="yts" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading textAlign={"center"} size="md">
                  Flipkart-Clone
                </Heading>
                <Text textAlign={"center"}>
                  Your Flipkart website clone is a sleek, user-friendly platform
                  built with React and styled with Chakra UI, offering a
                  seamless shopping experience.
                </Text>

                <Text textAlign={"center"}>
                  Tech stack - React | Chakra-UI | | Git
                </Text>
              </Stack>
            </CardBody>

            <CardFooter m={"auto"}>
              <ButtonGroup spacing="2">
                <Link
                  href="https://flipkart-clone-lime-two.vercel.app/"
                  isExternal
                >
                  <Button variant="solid" colorScheme="blue">
                    Live Demo
                  </Button>
                </Link>

                <Link
                  href="https://github.com/iamnaveen8851/Flipkart-Clone"
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
            borderRadius={"20px"}
            maxW="sm"
          >
            <CardBody>
              <Image src="\Learning.png" alt="Learning Exp" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading textAlign={"center"} size="md">
                  Learning Exp-Clone
                </Heading>
                <Text textAlign={"center"}>
                  Learning-Exp Clone is a replica of the Learning Exp UI website
                  developed for a purpose of mimic it .
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}np
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
            borderRadius={"20px"}
            maxW="sm"
          >
            <CardBody>
              <Image src="\brightline.png" alt="Brightline" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading textAlign={"center"} size="md">
                  BrightLine-Clone
                </Heading>
                <Text textAlign={"center"}>
                  It provides a platform for users to browse solutions and their
                  respective details of mental diseases online conveniently.
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
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
            w={{
              base: "90%",
              sm: "90%",
              md: "100%",
              lg: "110%",
              xl: "110%",
            }}
            m="auto"
            borderRadius={"20px"}
            maxW="sm"
          >
            <CardBody>
              <Image src="\movie-app.png" alt="Movie-App" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading textAlign={"center"} size="md">
                  Movie-Search-App
                </Heading>
                <Text textAlign={"center"}>
                  It provides a platform for users to browse movie and their
                  corresponded details of movies and series online conveniently.
                </Text>

                <Text textAlign={"center"}>
                  Tech stack - HTML | CSS | JavaScript | Advance JS | Git
                </Text>
              </Stack>
            </CardBody>

            <CardFooter m={"auto"}>
              <ButtonGroup spacing="2">
                <Link
                  href="https://movie-app-fetch-assignment.vercel.app/"
                  isExternal
                >
                  <Button variant="solid" colorScheme="blue">
                    Live Demo
                  </Button>
                </Link>

                <Link
                  href="https://github.com/iamnaveen8851/Movie-App-Fetch-Assignment-"
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
      </SimpleGrid>
    </>
  );
};

export default Projects;
