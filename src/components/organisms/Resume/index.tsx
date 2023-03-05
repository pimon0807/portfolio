import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";

export type ResumeData = {
  companyName: string;
  years: string;
  occupation: string;
  discription: string;
};

interface ResumeCardProps {
  data: ResumeData;
}

const ResumeCard = ({ data }: ResumeCardProps) => {
  return (
    <>
      <Box width="10%">
        <Text as="h3" variant="mediumLarge" textAlign="center">
          会社名
        </Text>
        <Text as="p" textAlign="center">
          {data.companyName}
        </Text>
      </Box>
      <Box width="10%">
        <Text as="h3" variant="mediumLarge" textAlign="center">
          期間
        </Text>
        <Text as="p" textAlign="center">
          {data.years}
        </Text>
      </Box>
      <Box width="20%">
        <Text as="h3" variant="mediumLarge" textAlign="center">
          職種
        </Text>
        <Text as="p" textAlign="center">
          {data.occupation}
        </Text>
      </Box>
      <Box width="40%">
        <Text as="h3" variant="mediumLarge" textAlign="center">
          概要
        </Text>
        <Text as="p">{data.discription}</Text>
      </Box>
    </>
  );
};

export default ResumeCard;
