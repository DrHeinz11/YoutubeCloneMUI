import {
  useDisclosure,
  Button,
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Box,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

function OptionPopover(props: {
  icon?: IconType;
  variant?: string;
  avatarSrc?: string;
}) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box position="relative">
      <Button
        variant={"topNavBar"}
        margin={"0 !important"}
        aria-label={"Notifications"}
        onClick={onToggle}
      >
        {props.variant === "avatar" ? (
          <Image
            src={props.avatarSrc}
            alt={props.variant}
            boxSize={"24px"}
            borderRadius={"full"}
          />
        ) : (
          <props.icon size={"24px"} />
        )}
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        placement="bottom"
      >
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <HStack as={PopoverBody}>
            {["ASD", "ASD3", "ASD4"].map((item) => (
              <Box key={item} bgColor={"red.100"} boxSize={"48px"}>
                <Text>{item}</Text>
              </Box>
            ))}
          </HStack>
        </PopoverContent>
      </Popover>
    </Box>
  );
}

export default OptionPopover;
