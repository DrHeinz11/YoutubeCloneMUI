import { Stack } from "@chakra-ui/react";
import {
  ButtonLogo,
  CategoryComponents,
  General,
} from "./components";
import { categoryData } from "../../constant/dataRoute";

const SideBar = ({ ...defaultprops }) => {
  return (
    <Stack
      as="nav"
      pt="4"
      pl="6"
      minW="264px"
      maxW="264px"
      borderInlineEnd="1px solid #c1c1c1"
      justifyContent={{ base: "space-between", "2xl": "flex-start" }}
      gap={8}
      flex={1}
      bgColor={"#fafafa"}
      borderRadius={"xl"}
      m={2}
      pb={2}
      {...defaultprops}
    >
      <ButtonLogo/>
      {categoryData.map((element) => (
        <CategoryComponents
          category={element.category}
          key={element.id}
          dataRoute={element.dataRoute}
        />
      ))}
      <General/>
    </Stack>
  );
};

export default SideBar;
