import {
    Box,
    Flex, 

} from "@chakra-ui/react"
import CommonNav from "./CommonNav"
import Feed from "./Feed"
import Hashes from "./Hashes"

export default function Home () {
    
    return (
        <Box  maxW="1300px" margin="0 auto" mt="56px" >
            <Flex w="100%" gap="20px" h="50vh" >
                <Box w="20%" borderRadius="20px" h="100%" >
                    <CommonNav/>
                </Box>
                <Box w="50%" borderRadius="20px" h="100%"   >
                    <Feed/>
                </Box>

                <Box w="30%" borderRadius="20px" h="100%"   >
                    <Hashes/>
                </Box>
            </Flex>

        </Box>
    )

}