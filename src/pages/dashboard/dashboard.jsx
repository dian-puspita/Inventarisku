import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { CiSun } from "react-icons/ci";
import { Outlet, useNavigate } from "react-router-dom";
import { useColorMode } from "../../components/ui/color-mode";
import MyDrawer from "../Drawer/Drawer";
import person from "../../img/person.png";

const Dashboard = () => {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();
  const { toggleColorMode } = useColorMode();

  useEffect(() => {
    const usernameLS = localStorage.getItem("usernameLS");

    if (usernameLS == null) {
      navigate("/");
    } else {
      setNama(localStorage.getItem("namaLS"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Box
        width="100vw"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="10px"
      >
        <MyDrawer nama={nama} imglogo={person} />
        <Box display="flex" flexDirection="row" gap="10px">
          <Button
            variant="outline"
            shadow="1px 1x 1px grey"
            onClick={toggleColorMode}
          >
            <CiSun />
          </Button>
          <Button
            variant="outline"
            shadow="1px 1x 1px grey"
            onClick={() => {
              handleLogout();
            }}
          >
            <BiLogOut />
          </Button>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default Dashboard;
