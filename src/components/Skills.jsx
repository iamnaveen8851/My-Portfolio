import React from "react";
import { SimpleGrid, Box, Heading, Image } from "@chakra-ui/react";
const Skills = () => {
  return (
    <>
      <Box
        //  border={"1px solid red"}
        w="80%"
        m={"auto"}
        id="Skills"
      >
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
          // border={"1px solid black"}

          // p={10}
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 4,
            xl: 5,
            "2xl": 5,
          }}
          display={"grid"}
          justifyContent={""}
          alignItems={"center"}
          m={"auto"}
          spacing={10}
        >
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\html.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\css.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\js.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\react.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\redux.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
                "2xl": "100%",
              }}
              src="\chakra.png"
            />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\git.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\postman.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\vite.svg" />
          </Box>
          <Box
            p={5}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image src="\node-js.svg" />
          </Box>
          {/* <Box p={5} >
            <Image src="public\vs-code.svg" />
          </Box> */}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skills;
