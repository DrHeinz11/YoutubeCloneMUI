import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

const IsError = ({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Error!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        There was an error processing your request, error type:{" "}
        {JSON.stringify(error)}
      </AlertDescription>
    </Alert>
  );
};

export default IsError;
