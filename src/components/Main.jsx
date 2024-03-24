import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Link,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
function Main() {
  // To view the resume
  function handleResumeClick() {
    window.open(
      "https://drive.google.com/file/d/1PhHwQLraFWSVRZ41PXl_jArdOq90iPy4/view?",
      "_blank"
    );
  }

  return (
    <>
      {/* // #Home */}
      <Box
        id="Home"
        w="90%"
        border={"1px solid blue"}
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
                words={["Frontend-Developer.", "Coding Problem Solver"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={80}
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
            <Button bg="rgb(64, 112, 244)" color="white">
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

      <br />
      <br />
      <br />
      <br />

      {/* About */}
      <Box
        bg={"#EBF8FF"}
        // border={"1px solid black"}
        w={"100%"}
        m={"auto"}
        p={20}
        id="About"
      >
        <Heading
          color={"rgb(64, 112, 244)"}
          textAlign={"center"}
          fontSize={"45px"}
        >
          About
        </Heading>
        <br />
        <br />
        <Text textAlign={"center"} fontSize={"40px"}>
          I am{" "}
          <span style={{ color: "rgb(64, 112, 244)", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Naveen Kumar", " a Frontend Developer"]}
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
        <Center w={"60%"} m={"auto"}>
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

      <br />
      <br />
      <Box border={"1px solid red"} w="90%" m={"auto"} id="Skills">
        <Heading
          color={"rgb(64, 112, 244)"}
          textAlign={"center"}
          fontSize={"45px"}
        >
          Skills
        </Heading>
        <br />
        <br />

        <SimpleGrid
          border={"1px solid black"}
          p={5}
          columns={6}
          display={"grid"}
          justifyContent={""}
          alignItems={"center"}
          m={"auto"}
          spacing={10}
        >
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Main;
