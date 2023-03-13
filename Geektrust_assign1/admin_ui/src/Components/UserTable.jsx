import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FcNext, FcPrevious } from "react-icons/fc";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  IconButton,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRole, setEditRole] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle search query input
  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Handle row selection
  function handleRowSelect(id) {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
    setEditUser(null);
    setEditName("");
    setEditEmail("");
    setEditRole("")
  }

  // Handle select all checkbox
  function handleSelectAll(event) {
    setSelectedRows(
      event.target.checked ? filteredUsers.map((user) => user.id) : []
    );
    setEditUser(null);
    setEditName("");
    setEditEmail("");
    setEditRole("")
  }

  // Handle row deletion
  function handleRowDelete(id) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    setSelectedRows([]);
    setEditUser(null);
    setEditName("");
    setEditEmail("");
    setEditRole("")
    alert("Selected User was deleted successful")
  }
  const handleDeleteSelectedRows = () => {
    const newUsers = users.filter((user) => !selectedRows.includes(user.id));
    setUsers(newUsers);
    setSelectedRows([]);
    alert("Selected User was deleted successful")
  };

  // Handle edit Button click
  function handleEditClick(id) {
    const userToEdit = users.find((user) => user.id === id);
    setEditUser(id);
    setEditName(userToEdit.name);
    setEditEmail(userToEdit.email);
    setEditRole(userToEdit.role)
    onOpen();
  }

  // Handle name input change
  const handleNameChange=(event) =>{
    setEditName(event.target.value);
  }

  // Handle email input change
  const handleEmailChange=(event)=> {
    setEditEmail(event.target.value);
  }
  const handleRoleChange=(event) =>{
    setEditRole(event.target.value);
  }

  // Handle save Button click
  function handleSaveClick() {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === editUser) {
          return {
            ...user,
            name: editName,
            email: editEmail,
            role: editRole,
          };
        } else {
          return user;
        }
      })
    );
    setEditUser(null);
    setEditName("");
    setEditEmail("");
    setEditRole("")
    onClose();
  }

  // Handle cancel Button click
  function handleCancelClick() {
    setEditUser(null);
    setEditName("");
    setEditEmail("");
    setEditRole("")
    onClose();
  }

  // Pagination
  // Calculate total number of pages
  const totalPages = Math.ceil(filteredUsers.length / 10);

  // Calculate index of last user on current page
  const lastIndex = currentPage * 10;

  // Calculate index of first user on current page
  const firstIndex = lastIndex - 10;

  // Get users on current page
  const currentUsers = filteredUsers.slice(firstIndex, lastIndex);
// console.log("current" , currentPage);
  return (
    <>
      <FormControl m="auto" mt="4" mb="1rem" w="50%" >
        <Input type="text" placeholder="Search by Name, Email or Role" onChange={handleSearchQueryChange} />
      </FormControl>
      <Table variant="simple" w="90%" m="auto" border="1px solid gray">
        <Thead>
          <Tr bgColor="skyblue" >
            <Th >
              <input
                type="checkbox"
                checked={
                  selectedRows.length === filteredUsers.length &&
                  filteredUsers.length !== 0
                }
                onChange={handleSelectAll}
              />
            </Th>
            <Th fontSize="1rem">Name</Th>
            <Th fontSize="1rem">Email</Th>
            <Th fontSize="1rem">Role</Th>
            <Th fontSize="1rem">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentUsers.map((user) => (
            <Tr key={user.id}>
              <Th>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(user.id)}
                  onChange={() => handleRowSelect(user.id)}
                />
              </Th>
              <Th>{user.name}</Th>
              <Th>{user.email}</Th>
              <Th>{user.role}</Th>
              <Th>
                <IconButton
                  aria-label="Edit user"
                  icon={<BiEditAlt color="blue" />}
                  mr="2"
                  onClick={() => handleEditClick(user.id)}
                />
                <IconButton
                  aria-label="Delete user"
                  icon={<MdDelete color="red" />}
                  onClick={() => handleRowDelete(user.id)}
                />
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {currentUsers.length === 0 && (
        <p>No users found matching your search criteria</p>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{"Edit User"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input type="text" value={editName} onChange={handleNameChange} />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Email:</FormLabel>
              <Input
                type="email"
                value={editEmail}
                onChange={handleEmailChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Role:</FormLabel>
              <Input
                type="role"
                value={editRole}
                onChange={handleRoleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveClick}>
              Save
            </Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div>
        <Button colorScheme='linkedin' mt="1rem" mb="1rem" onClick={handleDeleteSelectedRows}>Delete Selected</Button>
      </div>
      <Box className="pagination"  >
        <button 
         style={{fontSize:"24px"}}
          disabled={currentPage===1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          < FcPrevious/>
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            disabled={pageNum === currentPage}
               
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </button>
        ))}
        <button
        style={{fontSize:"24px"}}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FcNext />
        </button>
      </Box>
    </>
  );
};

export default UserTable;
