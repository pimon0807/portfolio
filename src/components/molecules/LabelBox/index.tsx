import Text from "@/components/atoms/Text";
import { Box } from "@mui/system";

export interface LavelBoxProps {
  title: string;
  doc: string;
}

const LabelBox = ({ title, doc }: LavelBoxProps) => {
  return (
    <>
      <Box>
        <Text as="h3" fontSize="extraLarge">
          {title}
        </Text>
      </Box>
      <Box paddingX={1} paddingBottom={1}>
        <Text as="p">{doc}</Text>
      </Box>
    </>
  );
};

export default LabelBox;
