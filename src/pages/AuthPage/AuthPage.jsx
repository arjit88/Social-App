import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  const images = ["/display-1.png", "/display-2.png", "/display-3.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left Hand Side */}
          <Box display={{ base: "none", md: "block" }} position="relative">
            <Image src="/phone-cover.png" h={650} alt="Phone img" />
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Display ${index + 1}`}
                width="56%"
                height="86%"
                objectFit="cover"
                position="absolute"
                top={6}
                left={147}
                borderRadius="26px"
                opacity={currentImageIndex === index ? 1 : 0}
                transition="opacity 1s ease-in-out"
              />
            ))}
          </Box>

          {/* Right Hand Side */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
