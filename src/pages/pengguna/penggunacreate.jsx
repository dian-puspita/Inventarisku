import { Box, CardHeader, CardRoot, CardTitle, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { ShowToasts } from "../login/login";
import axios from "axios";

const PenggunaCreate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const navigate = useNavigate();


  const handleSimpan = async () => {
    const url = "http://localhost/codebackendweb/insertpengguna.php";
    const body = { username: username, password: password, nama: nama };

    try {
      const response = await axios.post(url, body);
      if (response.data.STATUS === "BERHASIL") {
        navigate("/dashboard/pengguna");
      } else {
        ShowToasts("INFO", "Login Gagal");
        navigate("/dashboard/pengguna/tambah");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <CardRoot width="50vw" shadowColor="bg.emphasized" shadow="lg">
          <CardHeader>
            <CardTitle>
              <Text>Form Tambah Pengguna</Text>
            </CardTitle>
          </CardHeader>
          <Box display="flex" flexDirection="column" gap="4" mt="4">
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
              type="text"
              border="1px solid grey"
              borderRadius="10px"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              type="text"
              border="1px solid grey"
              borderRadius="10px"
              placeholder="Nama"
              onChange={(e) => {
                setNama(e.target.value);
              }}
            />
            <Button
              variant="solid"
              bg="green.400"
              onClick={() => handleSimpan()}
            >
              Simpan Pengguna
            </Button>
            <Button variant="outline" as={Link} to="/dashboard/pengguna">
              Kembali
            </Button>
          </Box>
        </CardRoot>
      </Box>
    </>
  );
};

export default PenggunaCreate;
