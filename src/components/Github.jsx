import React from "react";
import { Text, Box, Heading } from "@chakra-ui/react";
const Github = () => {
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
        Github Contribution
      </Heading>

      <Box
      
        h={"100vh"}
        w="90%"
          // border={"1px solid red"}
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
        <Text
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
          }}
        >
          {/* <img
            width="350px"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=iamnaveen8851&show_icons=true&locale=en"
            alt="iamnaveen8851"
          /> */}
          <img
            src="https://github-readme-stats.vercel.app/api?username=iamnaveen8851&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
            width="400"
            height="200"
          />
        </Text>

        <Text
          id="lang"
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
          }}
        >
          {/* <img
            width="320px"
            align="left"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=iamnaveen8851&show_icons=true&locale=en&layout=compact"
            alt="iamnaveen8851"
          /> */}
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=iamnaveen8851&theme=dark&hide_border=false"
            width="440"
            height="200"
          />
        </Text>

        <Text
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
          }}
        >
          {/* <img
            width="350px"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=iamnaveen8851&"
            alt="iamnaveen8851"
          /> */}
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=iamnaveen8851&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
            width="370"
            height="200"
          />
        </Text>
      </Box>
    </>
  );
};

export default Github;
