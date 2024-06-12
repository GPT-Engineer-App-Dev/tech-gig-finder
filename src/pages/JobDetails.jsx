import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering", description: "Develop and maintain user interfaces." },
  { id: 2, title: "Product Manager", category: "Product", description: "Oversee product development from start to finish." },
  { id: 3, title: "UI/UX Designer", category: "Design", description: "Design user interfaces and improve user experience." },
  { id: 4, title: "Backend Developer", category: "Engineering", description: "Develop and maintain server-side logic." },
  { id: 5, title: "Product Owner", category: "Product", description: "Define product vision and work closely with development teams." },
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

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
          {job.title}
        </Heading>
        <Text fontSize="lg" mb={4}>
          Category: {job.category}
        </Text>
        <Text fontSize="md">{job.description}</Text>
      </Box>
    </Container>
  );
};

export default JobDetails;