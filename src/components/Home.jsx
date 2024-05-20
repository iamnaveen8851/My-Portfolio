import React from "react";

import { Box, Image, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  // To view the resume
  function handleResumeClick() {
    window.open(
      "https://drive.google.com/file/d/1n6eWLk4dF5zxMNJzcHSv6yIPFNKwq_XG/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <>
      <Box
        id="Home"
        w="100%"
        h={{
          base: "max-content",
          sm: "max-content",
          md: "max-content",
          lg: "100vh",
          xl: "100vh",
          "2xl": "100vh",
        }}
        // border={"1px solid blue"}
        p={15}
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={"space-around"}
        m={"auto"}
      >
        {/* Heading Container */}
        <Box
          p={5}
          textAlign={{
            base: "center",
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          // border={"1px solid black"}
        >
          <br />
          <Heading fontSize={"48px"}>Hi 👋, </Heading>
          <br />
          <Heading
            fontSize={{
              base: "34px",
              sm: "34px",
              md: "35px",
              lg: "48px",
              xl: "48px",
              "2xl": "48px",
            }}
          >
            I am{" "}
            <Text as="span" color={"rgb(64, 112, 244)"}>
              Naveen Kumar
            </Text>
          </Heading>
          <br />

          <Heading
            fontSize={{
              base: "21.5px",
              sm: "30px",
              md: "22px",
              lg: "30px",
              xl: "30px",
              "2xl": "36px",
            }}
          >
            And I'm a{" "}
            <span style={{ color: "rgb(64, 112, 244)", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["MERN Developer", "Problem Solver", "Creative Thinker"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={120}
                delaySpeed={1200}
              />
            </span>
          </Heading>

          <br />
          <Link
            href="Naveen Kumar-Resume.pdf"
            onClick={handleResumeClick}
            download={"Naveen Kumar-Resume"}
            isExternal
          >
            <Button
              w={{
                base: "50%",
                sm: "50%",
                md: "40%",
                lg: "30%",
                xl: "30%",
                "2xl": "30%",
              }}
              h={{
                base: "50px",
                sm: "50px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              }}
              fontSize={"17px"}
              _hover={{
                background: "green",
                color: "white",
                transform: "scale(1.1)",
              }}
              bg="rgb(64, 112, 244)"
              color="white"
            >
              Resume
            </Button>
          </Link>
        </Box>

        {/* Image Container */}
        <Box
          p={5}
          // border={"1px solid black"}
        >
          <Box
            w="100%"
            // border={"1px solid black"}
          >
            <Image
              m={"auto"}
              w={{
                base: "300px",
                sm: "300px",
                md: "340px",
                lg: "350px",
                xl: "400px",
                "2xl": "400px",
              }}
              h={{
                base: "300px",
                sm: "300px",
                md: "340px",
                lg: "350px",
                xl: "400px",
                "2xl": "400px",
              }}
              borderRadius={"50%"}
              src="/profile.png"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
