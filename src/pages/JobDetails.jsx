import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box } from "@chakra-ui/react";
import { useJob } from "../integrations/supabase/index.js";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useJob(id);

  if (isLoading) {
    return (
      <Container maxW="container.lg" py={10}>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.lg" py={10}>
        <Text>Error loading job details: {error.message}</Text>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container maxW="container.lg" py={10}>
        <Heading as="h1" size="xl" textAlign="center">
          Job Not Found
        </Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={10}>
      <Box borderWidth="1px" borderRadius="lg" p={6}>
        <Heading as="h1" size="xl" mb={4}>
          {job.jobs_title}
        </Heading>
        <Text fontSize="lg" mb={4}>
          Category: {job.job_area}
        </Text>
        <Text fontSize="md">Type: {job.job_type}</Text>
      </Box>
    </Container>
  );
};

export default JobDetails;