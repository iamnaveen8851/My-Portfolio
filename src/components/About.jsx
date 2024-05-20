import React from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  return (
    <>
      {/* About */}
      <Box
        bg={"#EBF8FF"}
        h={"100vh"}
        // border={"1px solid black"}
        w={"100%"}
        // mt={{
        //   base : "10%"
        // }}
        m={"auto"}
        p={20}
        id="About"
      >
        <Heading
          color={"rgb(64, 112, 244)"}
          textAlign={"center"}
          fontSize={"45px"}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
          }}
        >
          About
        </Heading>
        <br />
        <br />
        <Text textAlign={"center"} fontSize={{
          base: "24px",
          sm : "25px",
          md : "25px",
          lg  :"40px",
          xl : "40px",
          "2xl" : "40px"
        }}>
          I am{" "}
          <span style={{ color: "rgb(64, 112, 244)", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Naveen Kumar",  "MERN Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1200}
            />
          </span>
        </Text>
        <br />
        <Center w={{
          base:  "100%",
          sm : "100%",
          md : "80%",
          lg : "60%",
          xl : "60%",
        }} m={"auto"}>
          <Text textAlign={"center"}>
            Energetic and dedicated front-end developer intern with a solid
            foundation in HTML, CSS, and JavaScript. Proficient in React and
            adept at leveraging Git for collaborative coding. Demonstrates
            exceptional problem-solving abilities, coupled with a keen
            enthusiasm for quick learning and implementing cutting-edge
            technologies.
          </Text>
        </Center>
        <br />
      </Box>
    </>
  );
};

export default About;
