import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Divider,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import debounce from "../utils/debounce";
import API from "../api/api.client";
import { HiOutlineBell } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";

function Courier() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(searchQuery = "") {
    try {
      const response = await API.get("/api/v1/products", {
        params: {
          search: searchQuery,
        },
      });

      const products = response.data;
      console.log("Products:", products);
      setData(products.data);
    } catch (error) {
      console.error("Error retrieving products:", error);
    }
  }

  const debouncedSearch = debounce(fetchData, 1000);

  const handleSearch = (event: any) => {
    const searchQuery = event.target.value;
    debouncedSearch(searchQuery);
  };

  return (
    <Box h="90vh" w="100%" overflowY="hidden">
      <Box marginTop="10px">
        <Flex align="center">
          <Flex align="center" gap="480px">
            <Box
              width="400px"
              display="flex"
              alignItems="center"
              boxShadow="xl"
              borderRadius="10px"
              px="10px"
            >
              <CiSearch />
              <Input
                border="none"
                outline="none"
                focusBorderColor="transparent"
                placeholder="Search by tracking number or location ..."
              />
            </Box>

            <Flex
              align="center"
              bg="#AAAAAA"
              px={3}
              py={1}
              borderRadius="12px"
              color="#FFFFFF"
            >
              <HiOutlineBell fontSize="20px" />
              <Text>3</Text>
            </Flex>
          </Flex>
          <Flex align="center" margin="20px">
            <Image
              src="/Assets/profile.png"
              alt="Image Description"
              borderRadius="50%"
              width="40px"
              height="40px"
            />
            <Box color="#7C7C88" marginLeft="10px">
              <Text fontSize="16px">John Tae</Text>
              <Text fontSize="12px">Admin</Text>
            </Box>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" px="0" py="4" />
      </Box>

      <Box
        h="calc(80vh - 74px)"
        w="100%"
        overflowY="scroll"
        overflowX="hidden"
        marginTop="10px"
      >
        <Box marginTop="30px">
          <Text fontSize="20px" as="b">
            Manage Rider
          </Text>
        </Box>
        <Flex alignItems="center" gap="550px">
          <Flex alignItems="center" gap="20px">
            <Box
              width="300px"
              display="flex"
              alignItems="center"
              marginTop="50px"
              marginBottom="50px"
              border="1px solid"
              borderColor="#ABA7A7"
              borderRadius="10px"
              px="10px"
              py="4px"
            >
              <Input
                outline="none"
                border="none"
                focusBorderColor="transparent"
                placeholder="Search by name "
                onChange={(e) => handleSearch(e)}
              />
              <CiSearch />
            </Box>
            <Flex alignItems="center" gap="10px">
              <IoFilter fontSize="30px" color="#1F1F1F" />
              <Text as="b">Filter</Text>
            </Flex>
          </Flex>

          <Text
            backgroundColor="#070529E5"
            color="#FFFFFF"
            px="15px"
            py="5px"
            borderRadius="8px"
            cursor="pointer"
          >
            Add rider
          </Text>
        </Flex>
        <TableContainer>
          <Table>
            <Thead bg="#07052912">
              <Tr>
                <Th>Name</Th>
                <Th>Region</Th>
                <Th>Status</Th>
                <Th>Contact</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, image, region, status, contact }) => (
                <Tr key={name}>
                  <Td>
                    <Flex alignItems="center">
                      <Image src={image} boxSize="50px" borderRadius="50%" />
                      <Text ml={2}>{name}</Text>
                    </Flex>
                  </Td>
                  <Td>{region}</Td>
                  <Td>
                    {status === "assigned" ? (
                      <Box
                        backgroundColor="#E6FDEEC3"
                        color="#079638"
                        px={1}
                        borderRadius="4px"
                        display="inline-block"
                      >
                        {status}
                      </Box>
                    ) : (
                      <Box
                        backgroundColor="#F7D8DFC5"
                        color="#CD0B3A"
                        px={1}
                        borderRadius="4px"
                        display="inline-block"
                      >
                        {status}
                      </Box>
                    )}
                  </Td>
                  <Td>{contact}</Td>
                  <Td>
                    <BiDotsVerticalRounded />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Courier;
