import { Box, Flex, Button } from "@chakra-ui/react";

export default function Feed() {
  const isSelected = true;
  return (
    <Box w="100%" h="100%">
      <Box mt="20px">
        <Button
          fontWeight={isSelected ? "bold" : ""}
          bgColor="transparent"
          _hover={{
            backgroundColor: "white",
            color: "#3b49df",
          }}
        >
          Relevant
        </Button>
        <Button
          bgColor="transparent"
          _hover={{
            backgroundColor: "white",
            color: "#3b49df",
          }}
          ml="2"
          mr="2"
        >
          Latest
        </Button>
        <Button
          bgColor="transparent"
          _hover={{
            backgroundColor: "white",
            color: "#3b49df",
          }}
        >
          Top
        </Button>
      </Box>
    </Box>
  );
}
