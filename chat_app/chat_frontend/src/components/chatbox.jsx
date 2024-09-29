import { Avatar, Box, Button, HStack, Input, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client"

const socket = io("http://localhost:4000");

export const Chatbox = () => {
    const [messages, setMessages] = useState([]);
    const [userId, setUserId] = useState(null);
    const [input, setInput] = useState("");

    useEffect(() => {
        let storedUserId = sessionStorage.getItem("userId");
        if (!storedUserId) {
            storedUserId = Math.random().toString(36).substring(7);
            sessionStorage.setItem("userId", storedUserId);
        }
        setUserId(storedUserId);

        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            const message = {
                userId,
                text: input,
            };
            socket.emit("sendMessage", message);
            setInput("");
        }
    };

    return (
        <Flex direction="column" align="stretch" width="100%" height="100vh">
            <Box
                flex="1"
                p={4}
                overflowY="auto"
                borderRadius="lg"
                bg="gray.50"
                maxH={{ base: "400px", md: "500px", lg: "540px" }}
            >
                {messages.map((message, index) => (
                    <HStack key={index} justify={message.userId === userId ? "flex-start" : "flex-end"}>
                        {message.userId === userId && <Avatar name="Me" size={{ base: "sm", md: "md" }} />}
                        <Box
                            bg={message.userId === userId ? 'blue.100' : 'green.100'}
                            p={3}
                            borderRadius="lg"
                            maxW="70%"
                            fontSize={{ base: "sm", md: "md" }} // Responsive font size
                            marginY={2}
                        >
                            <Text>{message.text}</Text>
                        </Box>
                        {message.userId !== userId && <Avatar name="Other" size={{ base: "sm", md: "md" }} />}
                    </HStack>
                ))}
            </Box>
            <HStack p={2} boxShadow="lg" bg="transparent" borderRadius="sm">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    fontSize={{ base: "sm", md: "md" }}
                />
                <Button
                    onClick={sendMessage}
                    colorScheme="teal"
                    size={{ base: "sm", md: "md" }} // Responsive button size
                >
                    Send
                </Button>
            </HStack>
        </Flex>
    );
};
