import {
  Link,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Spacer,
  Box,
  Text,
  Input
} from "@chakra-ui/react";
import { CodeIcon, EarthIcon } from "../common/EarthIcon";
import FilterIcon from "../common/FilterIcon";
import Styles from "./Dashboard.module.css";
import JobTypeButton from "./JobTypeButton";
import { TriangleUpIcon } from "@chakra-ui/icons";

export function Navbar() {
  return (
    <Box w="100%">
      <Box w="100%" boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px">
        <Flex p="3" minWidth="max-content" alignItems="center" gap="2">
          <Link to="/">
            <Image
              boxSize="35px"
              src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
            />
          </Link>
          <Spacer />
          <ButtonGroup gap="2">
            <Button
              color="blackAlpha.800"
              fontWeight="300"
              fontSize="sm"
              colorScheme="none"
            >
              Sign in
            </Button>
            <Button
              variant="outline"
              colorScheme="purple"
              fontSize="sm"
              fontWeight="300"
            >
              Sign Up
            </Button>
          </ButtonGroup>
          <Button
            backgroundImage="linear-gradient(to right, var(--chakra-colors-purple-500), var(--chakra-colors-blue-500))"
            colorScheme="none"
            fontSize="sm"
            fontWeight="550"
          >
            Post a Job 🚀
          </Button>
        </Flex>
      </Box>

      <Box m="auto" mt="6%" mb="3%" w="50%">
        <Text
          m="auto"
          mb="3%"
          fontSize="6xl"
          color="gray.700"
          fontWeight="bold"
        >
          Find The Right
          <br />
          <span className={Styles.FourDaytext}>Four-Day</span> Week Job
        </Text>
        <Box>
          <Flex gap="1rem">
            <Input
              borderRadius="0.75rem"
              boxShadow="2xl"
              placeholder="Type job title or keyword"
            />
            <Button
              py="1rem"
              borderRadius="0.75rem"
              color="gray.700"
              variant="ghost"
              background="gray.200"
            >
              <FilterIcon />
            </Button>
          </Flex>
        </Box>
        <Flex mt="1rem" gap="1rem" justifyContent="space-between">
          <JobTypeButton icon={<EarthIcon />} text="Remote" />
          <JobTypeButton icon={<CodeIcon />} text="Tech" />
          <JobTypeButton
            icon={<TriangleUpIcon color="orange.400" />}
            text="Marketing"
          />
        </Flex>
      </Box>
    </Box>
  );
}
