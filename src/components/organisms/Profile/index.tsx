import ShapeImage from "@/components/atoms/ShapeImage";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Text from "@/components/atoms/Text";
import { myProfile } from "@/types/myProfile";
import { cmsProfile, img } from "@/types/myApp";
import LavelBox from "@/components/molecules/LabelBox";

export type ProfileData = {
  name: string;
  profileImage: img;
  introductionText: string;
  address: string;
  dateOfBirth: string;
  programingSkills: string;
  otherSkills: string;
  hobby: string;
  qualifications: string;
};

interface ProfileCardProps {
  data: ProfileData;
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      border={"solid 1px"}
    >
      <Box>
        <ShapeImage
          src={data.profileImage.url}
          alt={""}
          width={250}
          height={250}
          shape="circle"
        />
        <Text as="h1" fontSize="extraLarge" textAlign="center">
          {data.name}
        </Text>
        <Text as="p" textAlign="center">
          {data.dateOfBirth} 26歳
        </Text>
        <Text as="p" textAlign="center">
          {data.address}在住
        </Text>
      </Box>
      <Box width="50%">
        <LavelBox title="プログラミングスキル" doc={data.programingSkills} />
        <LavelBox title="その他スキル" doc={data.otherSkills} />
        <LavelBox title="趣味" doc={data.hobby} />
        <LavelBox title="保有資格" doc={data.qualifications} />
        <LavelBox title="概要" doc={data.introductionText} />
      </Box>
    </Flex>
  );
};

export default ProfileCard;
