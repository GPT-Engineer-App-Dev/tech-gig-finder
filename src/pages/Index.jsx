import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, Text, Select, Heading, SimpleGrid, Card, CardBody } from "@chakra-ui/react";
import { useJobs } from "../integrations/supabase/index.js";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: jobs, isLoading, error } = useJobs();

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.job_area === selectedCategory)
    : jobs;

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading jobs: {error.message}</Text>;
  }

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
                  <Heading size="md">{job.jobs_title}</Heading>
                  <Text mt={2}>{job.job_area}</Text>
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