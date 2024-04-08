import React from "react";
import { Text, Box, Heading } from "@chakra-ui/react";
const Github = () => {
  return (
    <>
      <Heading
        color={"rgb(64, 112, 244)"}
        textAlign={"center"}
        fontSize={"45px"}
      >
        Github Contribution
      </Heading>
    
      <Box
        h={"100vh"}
        //   border={"1px solid red"}
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        m={"auto"}
        gap={10}
        justifyContent={"space-around"}
        alignItems={"center"}
        id="github-contribution"
      >
        <Text>
          <img
            width="350px"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=iamnaveen8851&show_icons=true&locale=en"
            alt="iamnaveen8851"
          />
        </Text>

        <Text id="lang">
          <img
            width="350px"
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=iamnaveen8851&show_icons=true&locale=en&layout=compact"
            alt="iamnaveen8851"
          />
        </Text>

        <Text>
          <img
            width="350px"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=iamnaveen8851&"
            alt="iamnaveen8851"
          />
        </Text>
      </Box>
    </>
  );
};

export default Github;
