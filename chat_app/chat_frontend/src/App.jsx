import { Box, ChakraProvider, Heading, Text } from "@chakra-ui/react"
import { Chatbox } from "./components/chatbox"


function App() {

  return (
    <ChakraProvider>
      <Box p={5} width="840px" marginX={"auto"} h="720px" boxShadow={"md"} borderRadius={8}>
        <Heading as="h3" mb={6}>
          <Text color="blue" bg="blue.100" p={4} borderRadius={32} fontSize={24}>Real-Time chat app using Socket.io</Text>
        </Heading>
        <Chatbox />
      </Box>
    </ChakraProvider>
  )
}

export default App
