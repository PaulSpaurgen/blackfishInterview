import {
  Box,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import logo from "../../Resources/logo.png";

export default function Nav() {
  return (
    <Box>
      <Box
        position="fixed"
        top="0"
        w="100vw"
        h="56px"
        borderBottom="1px"
        borderBottomColor="gray.200"
        boxShadow="sm"
        bg="white"
      >
        <Box maxW="1300px" margin="0 auto">
          <Flex alignItems="center" h="100%" w="100%" justifyContent="space-between">
            <Flex alignItems="center" h="56px"  >
              <Img src={logo} w="50px" h="auto" />
              <InputGroup>
                <Input
                  type="text"
                  minW="400px"
                  ml="20px"
                  placeholder="Search..."
                />
                <InputRightElement>
                  <Icon as={IoSearch} w="24px" h="24px" />
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex>
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
              <Button
                variant="outline"
                ml="2"
                color="#3b49df"
                borderColor="#3b49df"
                _hover={{
                    textDecoration:"underline",
                    backgroundColor:"#3b49df",
                    color:"white",
                }}
              >
                Create Account
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
