import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  CardRoot,
  CardTitle,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import img from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
import { Toaster, toaster } from "../../components/ui/toaster.jsx";
import axios from "axios";
import { useColorMode } from "../../components/ui/color-mode.jsx";

export function ShowToasts(judul, pesan) {
  return toaster.create({
    title: judul,
    description: pesan,
    duration: 1000,
  });
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const usernameLS = localStorage.getItem("usernameLS");
    if (usernameLS) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async () => {
    const url = "http://localhost/codebackendweb/proseslogin.php";
    const body = { username: username, password: password };

    try {
      const response = await axios.post(url, body);
      if (response.data.STATUS === "BERHASIL") {
        localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
        localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
        navigate("/dashboard");
      } else {
        ShowToasts("INFO", "Login Gagal");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <Toaster />
        <CardRoot
          width="50vw"
          height="60vh"
          shadowColor="bg.emphasized"
          shadow="lg"
        >
          <CardHeader>
            <CardTitle
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={img} width="10vw" alt="Logo Inventaris Ku" />
              <Text>Inventaris Ku</Text>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Box display="flex" flexDirection="column" gapY="5px">
              <Input
                type="text"
                border="1px solid grey"
                borderRadius="10px"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <Input
                type="password"
                border="1px solid grey"
                borderRadius="10px"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                borderRadius="10px"
                bg="teal"
                onClick={() => {
                  handleLogin();
                }}
              >
                LOGIN
              </Button>
            </Box>
          </CardBody>
        </CardRoot>
      </Box>
    </>
  );
};

export default Login;
