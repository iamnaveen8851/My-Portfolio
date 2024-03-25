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
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Github from "./Github";
function Main() {
  return (
    <>
      {/* Home */}
      <Home />

      <br />
      <br />
      <br />
      <br />

      {/* About */}
      <About />
      <br />
      <br />

      <Skills />

      <br />
      <br />
      <br />
      {/* Projects */}
      <Projects />

      <br />
      <br />
      <br />

      <Github />
    </>
  );
}

export default Main;
