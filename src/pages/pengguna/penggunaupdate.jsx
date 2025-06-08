import {
  Box,
  CardBody,
  CardHeader,
  CardRoot,
  CardTitle,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowToasts } from "../login/login";
import { Link } from "react-router-dom"

const PenggunaUpdate = () => {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const fetchDataPengguna = async () => {
    const url = `http://localhost/codebackendweb/selectonepengguna.php?id=${id}`;
    const response = await axios.get(url);
    setUsername(response.data.DATA[0].username);
    setPassword(response.data.DATA[0].password);
    setNama(response.data.DATA[0].nama);
  };

  const handleEdit = async () => {
    const url = "http://localhost/codebackendweb/updatepengguna.php";
    const body = { username: username, password: password, nama: nama, id: id };

    try {
      const response = await axios.post(url, body);
      if (response.data.STATUS === "BERHASIL") {
        navigate("/dashboard/pengguna");
      } else {
        ShowToasts("Info", "Simpan Gagal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataPengguna();
  }, []);

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
              <Text>Form Edit Pengguna</Text>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Input
              type="text"
              border="1px solid grey"
              borderRadius="10px"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              type="text"
              border="1px solid grey"
              borderRadius="10px"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Input
              type="text"
              border="1px solid grey"
              borderRadius="10px"
              placeholder="Nama"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
            />
            <Button
              variant="solid"
              bg="blue.500"
              onClick={() => {
                handleEdit();
              }}
            >
              Edit Pengguna
            </Button>
            <Button variant="outline" as={Link} to="/dashboard/pengguna">
              Kembali
            </Button>
          </CardBody>
        </CardRoot>
      </Box>
    </>
  );
};

export default PenggunaUpdate;
