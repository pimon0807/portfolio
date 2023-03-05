import ShapeImage from "@/components/atoms/ShapeImage";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Header from "@/components/organisms/Header";
import ProfileCard from "@/components/organisms/Profile";
import Profile from "@/components/organisms/Profile";
import ResumeCard from "@/components/organisms/Resume";
import Layout from "@/components/templates/Layout";
import { theme } from "@/themes";
import { cmsProfile, cmsResume } from "@/types/myApp";
import { client } from "libs/client";

interface ProfilePageProps {
  profile: cmsProfile;
  resume: cmsResume;
}

const ProfilePage = ({ profile, resume }: ProfilePageProps) => {
  return (
    <Layout title="私について | Koki Arakawa's Portfolio">
      <Text
        as="h1"
        variant={"extraLarge"}
        textAlign="center"
        decoration={"underline"}
        decorationColor={theme.colors.primary}
        decorationLineOffset={"10px"}
      >
        プロフィール
      </Text>
      <Flex alignContent="center" justifyContent="center" padding={4}>
        <ProfileCard data={profile} />
      </Flex>
      <Text
        variant={"extraLarge"}
        as="h1"
        textAlign="center"
        decoration={"underline"}
        decorationColor={theme.colors.primary}
        decorationLineOffset={"10px"}
      >
        職務履歴概要
      </Text>
      <Flex alignContent="center" justifyContent="center">
        <ResumeCard data={resume} />
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const profileData = await client.get({ endpoint: "myprofile" });
  const resumeData = await client.get({ endpoint: "myworkexperience" });
  return {
    props: {
      profile: profileData.contents[0],
      resume: resumeData,
    },
  };
};

export default ProfilePage;
