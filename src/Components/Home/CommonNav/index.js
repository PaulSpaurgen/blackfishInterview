import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";



export default function CommonNav() {
    const navData = [
        {
          title: "Home",
          logo: <IoHome />,
        },
        {
          title: "Reading List",
          logo: <IoHome />,
        },
        {
          title: "Podcasts",
          logo: <IoHome />,
        },
        {
          title: "Videos",
          logo: <IoHome />,
        },
      ];
  return (
    <Box w="100%" h="100%" overflowY="none">
      <Box
        borderRadius="10px"
        boxShadow="md"
        p="20px"
        bgColor="white"
        border="1px"
        borderColor="gray.300"
        mt="20px"
      >
        <Text fontWeight="bold" fontSize="lg">
          DEV Community is a community of 1,233,306 amazing developers
        </Text>
        <Text mt="2" mb="2" fontSize="md" color="gray.400">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </Text>
        <Flex flexDirection="column" >
          <Button
            variant="outline"
            mb="2"
            color="#3b49df"
            borderColor="#3b49df"
            _hover={{
              textDecoration: "underline",
              backgroundColor: "#3b49df",
              color: "white",
            }}
          >
            Create Account
          </Button>
          <Button
           bg="white"
           _hover={{
              backgroundColor:"#F5FBFF",
              color:"#3b49df",
              textDecoration:"underline"   
           }}
          >
            Log In
          </Button>
        </Flex>
      </Box>
      <Flex flexDirection="column" mt="20px">
      {
        navData.map((val,index)=>((
            <Button
              key={index}
              bg="white"
              _hover={{
                 backgroundColor:"#F5FBFF",
                 color:"#3b49df",
                 textDecoration:"underline"   
              }}
              leftIcon={val?.logo}
              justifyContent="flex-start"
              mb="10px"

            >
                {val?.title}

            </Button>
        )))
      }
        
      </Flex>
   
    </Box>
  );
}
