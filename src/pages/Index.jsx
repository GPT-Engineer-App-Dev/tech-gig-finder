import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, Text, Select, Box, Heading, SimpleGrid, Card, CardBody } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UI/UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "Product Owner", category: "Product" },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Remote Tech Jobs
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your next remote job in tech. Filter by category to narrow down your search.
        </Text>
        <Select
          placeholder="Filter by category"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {filteredJobs.map((job) => (
            <Link to={`/job/${job.id}`} key={job.id}>
              <Card>
                <CardBody>
                  <Heading size="md">{job.title}</Heading>
                  <Text mt={2}>{job.category}</Text>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;