import React from "react";
import { Container, Menu, MenuButton, MenuList, MenuItem, Button, IconButton, Avatar } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<FaUserCircle />} variant="outline" size="lg" />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Index;
