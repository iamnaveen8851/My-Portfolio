import {  Box, Heading, IconButton, Link, Flex } from "@chakra-ui/react";
import { FaLinkedin, FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <Box id="Contact" bg={"rgb(26, 32, 44)"} border={"1px solid black"} p={10}>
      <Heading textAlign={"center"} color={"blue"}>
        Get in touch
      </Heading>

      <br />
      <Heading textAlign={"center"} color={"white"} fontSize={"40px"}>
        Naveen Kumar
      </Heading>

      <br />
      <Flex
        w={{
            base : "100%",
            sm : "100%",
            md : "70%",
            lg : "60%",
            xl : "60%",
            "2xl" : "60%"
        }}
        p={10}
        // border="1px solid white"
        justifyContent="space-between"
        alignItems={"center"}
        m="auto"
        columns={4}
        spacing={10}
      >
        <Box m="auto">
          <Link href="https://www.linkedin.com/in/codewithnaveen/" isExternal>
            <IconButton
             _hover={{ transform: "scale(1.1)" }}
              bg={"white"}
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              colorScheme="white"
              variant="outline"
              size="lg"
            />
          </Link>
        </Box>

        <Box m="auto">
          <Link href="tel:+918851258726">
            <IconButton
             _hover={{ transform: "scale(1.1)" }}
              bg={"white"}
              aria-label="Phone"
              icon={<FaPhone />}
              colorScheme="white"
              variant="outline"
              size="lg"
            />
          </Link>
        </Box>

        <Box m="auto">
          <Link href="https://github.com/iamnaveen8851" isExternal>
            <IconButton
             _hover={{ transform: "scale(1.1)" }}
              bg={"white"}
              aria-label="GitHub"
              icon={<FaGithub />}
              colorScheme="white"
              variant="outline"
              size="lg"
            />
          </Link>
        </Box>

        <Box m="auto">
          <Link href="mailto:nk24528.nk81@gmail.com" isExternal>
            
            <IconButton
             _hover={{ transform: "scale(1.1)" }}
              bg={"white"}
              aria-label="Email"
              icon={<FaEnvelope />}
              colorScheme="white"
              variant="outline"
              size="lg"
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
