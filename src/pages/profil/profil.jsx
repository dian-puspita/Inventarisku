import { useEffect, useState } from "react";
import person from "../../img/person.png";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Profil = () => {
  const [nama, setNama] = useState("");

  useEffect(() => {
    setNama(localStorage.getItem("usernameLS"));
  }, []);

  return (
    <>
      <Heading size="3xl" textAlign="center">
        Profil Saya
      </Heading>

      <Box display="flex" flexDirection="row" justifyContent="center">
        <Image
          src={person}
          width="20vw"
        />
      </Box>

      <Text textAlign="center" padding="10px">
        Nama Saya: {nama}
      </Text>

      <Text textAlign="center" padding="10px">
        Saya adalah seorang programmer amatir yang suka belajar.
      </Text>
    </>
  );
};

export default Profil;
