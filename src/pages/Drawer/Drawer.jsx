import {
  Box,
  Button,
  Center,
  Drawer,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom"; // Ganti ini

const MyDrawer = ({ nama, imglogo }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size="xs"
      placement="start"
    >
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm" shadow="1px 1px 1px grey">
          <BiMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>{nama}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body
              color={"black"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              <Center>
                <Image src={imglogo} width="20vw" />
              </Center>

              <Box
                paddingTop="20px"
                display="flex"
                flexDirection="column"
                gap="10px"
              >
                <Link to="/dashboard">
                  <Box
                    bgColor="yellow.100"
                    padding="10px"
                    _hover={{ bg: "blackAlpha.100" }}
                  >
                    <Text>Menu Dashboard</Text>
                  </Box>
                </Link>

                <Link to="pengguna">
                  <Box
                    bgColor="yellow.100"
                    padding="10px"
                    _hover={{ bg: "blackAlpha.100" }}
                  >
                    <Text>Menu Pengguna</Text>
                  </Box>
                </Link>

                <Link to="profil">
                  <Box
                    bgColor="yellow.100"
                    padding="10px"
                    _hover={{ bg: "blackAlpha.100" }}
                  >
                    <Text>Menu Profil</Text>
                  </Box>
                </Link>
              </Box>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MyDrawer;
