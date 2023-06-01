import {
  Box,
  Text,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaBoxOpen } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { LuFiles } from "react-icons/lu";
import { BsFillPeopleFill, BsWindowStack } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";

function Sidebar() {
  return (
    <Box h="100vh" bg="#070529" w="230px" overflowX="hidden">
      <Flex align="center" p={4}>
        <FaBoxOpen size={20} color="#F9C567" />
        <Text fontSize="16px" fontWeight="bold" ml={2} color="#F9C567">
          Sendrail
        </Text>
      </Flex>
      <Box color="#FFFFFF" fontSize="16px" fontWeight="500" marginTop="40px">
      <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
          <TbSmartHome />
          Dashboard
        </Flex>
      </Button>
    </Flex>

    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <LuFiles />
          Shipment
        </Flex>
      </Button>
    </Flex>
    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <BsFillPeopleFill />
          Customer
        </Flex>
      </Button>
    </Flex>
   <Link href='/components/courier'>
   <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <RiEBike2Fill />
          Courier
        </Flex>
      </Button>
    </Flex>
   </Link>
    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <AiOutlineCreditCard />
          Payroll
        </Flex>
      </Button>
    </Flex>
    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <BsWindowStack />
          Transaction
        </Flex>
      </Button>
    </Flex>
    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <IoMdSettings />
          Settings
        </Flex>
      </Button>
    </Flex>
    <Flex align="center" p={2}>
      <Button
        ml={2}
        cursor="pointer"
        display="inline-block"
        position="relative"
        variant="unstyled"
        _hover={{
          "&::before": {
            content: '""',
            position: "absolute",
            right: "-107px",
            top: "10px",
            bottom: "0",
            width: "3px",
            height: "30px",
            background: "#F9C567",
          },
          "& > *": {
            color: "#F9C567",
          },
        }}
      >
        <Flex align="center" gap="2">
        <MdOutlineLogin />
          Logout
        </Flex>
      </Button>
    </Flex>
    </Box>
    </Box>
  );
}

export default Sidebar;
