import React from "react";
import { SimpleGrid, Box, Heading, Image } from "@chakra-ui/react";
const Skills = () => {
  return (
    <>
      <Box
      //  border={"1px solid red"} 
       w="80%" m={"auto"} 

       id="Skills">
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
            base : 1,
            sm : 1,
            md : 2,
            lg : 4,
            xl : 5,
            "2xl" : 5
          }}
          display={"grid"}
          justifyContent={""}
          alignItems={"center"}
          m={"auto"}
          spacing={10}
        >
          <Box p={5} >
            <Image src="public\html.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\css.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\js.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\react.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\redux.svg" />
          </Box>
          <Box p={5} >
            <Image w={{
              base : "100%",
              sm : "100%",
              md : "100%",
              lg: "100%",
              xl : "100%",
              "2xl" : "100%",
            }} src="public\chakra.png" />
          </Box>
          <Box p={5} >
            <Image src="public\git.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\postman.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\vite.svg" />
          </Box>
          <Box p={5} >
            <Image src="public\node-js.svg" />
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
