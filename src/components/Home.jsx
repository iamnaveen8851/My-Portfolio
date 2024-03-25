import React from "react";

import { Box, Image, Heading, Text, Button, Link } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  // To view the resume
  function handleResumeClick() {
    window.open(
      "https://drive.google.com/file/d/1PhHwQLraFWSVRZ41PXl_jArdOq90iPy4/view?",
      "_blank"
    );
  }
  return (
    <>
      <Box
        id="Home"
        w="90%"
        // border={"1px solid blue"}
        p={15}
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={"space-around"}
        m={"auto"}
      >
        {/* Heading Container */}
        <Box
          p={12}
          //  border={"1px solid black"}
        >
          <br />
          <Heading fontSize={"48px"}>Hi 👋, </Heading>
          <br />
          <Heading fontSize={"48px"}>
            I am{" "}
            <Text as="span" color={"rgb(64, 112, 244)"}>
              Naveen Kumar
            </Text>
          </Heading>
          <br />

          <Heading fontSize={"45px"}>
            And I'm a{" "}
            <span style={{ color: "rgb(64, 112, 244)", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Frontend-Developer.", "Problem Solver", "Creative Thinker"]}
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
            href="public\Naveen Kumar-Resume.pdf"
            onClick={handleResumeClick}
            download={"Naveen Kumar-Resume"}
            isExternal
          >
            <Button
              bg="rgb(64, 112, 244)"
              color="white"
            >
              Resume
            </Button>
          </Link>
        </Box>

        {/* Image Container */}
        <Box
          p={10}
          // border={"1px solid black"}
        >
          <Box
            w="100%"
            //  border={"1px solid black"}
          >
            <Image
              m={"auto"}
              w="400px"
              h="400px"
              borderRadius={"50%"}
              src="public/profile.png"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
