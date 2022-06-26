import React from 'react'
import { Box, Image, Badge, Text, Stack, useColorMode, Button, Flex, Spacer, useBoolean } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import ReactDOM from "react-dom";
import { Fade, Slide, Bounce, AttentionSeeker, Rotate} from "react-awesome-reveal";
import { motion } from 'framer-motion';
import Logo from "../../images/Schooldule.png";
import "./Projects.css"

const Projects = () => {

  return (
	<section id="projects">
	<div className="project_highlight">
          <Slide direction="left" duration={1500}>
            <h1 style={{color: 'black', fontSize: '80px', fontFamily: 'Inter', fontWeight: 800, marginBottom: "10px", width: "600px", textAlign: "center"}}> Projects</h1>
          </Slide>
        </div>
		<div style={{ position: "relative", display: "flex", height: 150 ,width: "50%", margin: "auto", textAlign: 'center', top: "200px"}}>
			<AttentionSeeker delay={250} duration={1000}> 
			<p style={{color: 'black', fontSize: '30px', fontFamily: 'Inter', fontWeight: "550"}}>
                Come check out some of the projects I've done! 🧑‍💻 
                Click on any project to learn more about it!
              </p>
			</AttentionSeeker>
      </div>
	<div className='cards' style={{height: "600px"}}> 
  <motion.div whileHover={{ scale: 1.1, cursor: "pointer", transition: { duration: 0.25 }}} onClick={ () => { window.open('https://github.com/danielk1345/PortfolioCreator', '_blank')} }>
	  <Box w="350px" rounded="20px" overflow="hidden" backgroundColor={"#ebedec"} >
        <Image src= "https://www.nasdaq.com/sites/acquia.prod/files/image/29525db076bcc42505a356e55dbe94f38b28530b_getty-stock-market-data.jpg?957923608" boxSize="350px">
        </Image>
        <Box p={5}>
          <div style={{display: "flex", justifyContent: "space-evenly"}}> 
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> Python </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> Pandas </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> Numpy </Badge>
          </div>
        
          <Stack align="center" spacing={0.2}>
            <Text as="h2" fontWeight="bold" my={2} >
              Data Science Portfolio Generator
            </Text>
            <Text fontWeight="light" align={"center"}>
              A financial portfolio generator that produces a safe portfolio! 
            </Text>
            <Text fontWeight="bold"> Click to read more!</Text>
          </Stack>
          <Flex alignItems='center'>  
          </Flex>
        </Box>
      </Box>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, cursor: "pointer" , transition: { duration: 0.25 } }} onClick={ () => { window.open('https://github.com/danielk1345/Schooldule', '_blank')} }>
      <Box w="350px" rounded="20px" overflow="hidden" backgroundColor={"#ebedec"} >
        <Image src= {Logo} boxSize="350px">
        </Image>
        <Box p={5}>
          <div style={{display: "flex", justifyContent: "space-evenly"}}> 
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> React </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> Node.js </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> MySQL </Badge>
          </div>
        
          <Stack align="center" spacing={0.2}>
            <Text as="h2" fontWeight="bold" my={2} >
              SchoolDule Website
            </Text>
            <Text fontWeight="light" align={"center"}>
              A full-stack website that helps students manage their time.
            </Text>
            <Text fontWeight="bold"> Click to read more!</Text>
          </Stack>
          <Flex alignItems='center'>  
          </Flex>
        </Box>
      </Box>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.25 }, cursor: "pointer"}} onClick={ () => { window.open('https://github.com/danielk1345/class-finder', '_blank')} }>
      <Box w="350px" rounded="20px" overflow="hidden" backgroundColor={"#ebedec"} >
        <Image src= "https://www.nicepng.com/png/detail/9-94335_location-icon-location-icon-png-blue.png" boxSize="350px">
        </Image>
        <Box p={5}>
          <div style={{display: "flex", justifyContent: "space-evenly"}}> 
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> React Native </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> Python </Badge>
          <Badge variant="solid" colorScheme="blue" rounded="full" px={2}> JavaScript </Badge>
          </div>
        
          <Stack align="center" spacing={0.2}>
            <Text as="h2" fontWeight="bold" my={2} >
              Classroom Finder
            </Text>
            <Text fontWeight="light" align={"center"}>
              A React Native app that helps UWaterloo students find nearby study spaces.
            </Text>
            <Text fontWeight="bold"> Click to read more!</Text>
          </Stack>
          <Flex alignItems='center'>  
          </Flex>
        </Box>
      </Box>
      </motion.div>
	  </div>
	</section>
  
	)}

export default Projects