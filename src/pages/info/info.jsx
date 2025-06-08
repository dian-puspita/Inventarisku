import { Box, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <>
      <Box
        width="100dvw"
        height="80dvh"
        display="flex"
        flexDirection="column"
        justiyContent="center"
        alignItems="center"
        paddingTop={"40vh"}
      >
        <Text fontSize="3xl" fontWeight="extrabold">
          Halo Selamat Datang
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          Ini adalah Aplikasi Sederhana Ku
        </Text>
      </Box>
    </>
  );
};

export default Info;
