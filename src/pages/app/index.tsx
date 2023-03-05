import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import AppIcon from "@/components/molecules/AppIcon";
import Layout from "@/components/templates/Layout";
import { theme } from "@/themes";
import { myApp } from "@/types/myApp";
import { client } from "libs/client";
import styled from "styled-components";

const AppsPage = ({ apps }: Props) => {
  const Anchor = styled(Flex)`
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
    &:active {
      background-color: #dddddd;
    }
  `;

  return (
    <Layout title="制作したプロジェクト | Koki Arakawa's Portfolio">
      <Text
        as={"h1"}
        variant="extraLarge"
        textAlign="center"
        decoration={"underline"}
        decorationColor={theme.colors.primary}
        decorationLineOffset={"10px"}
      >
        制作したプロジェクト
      </Text>
      <Box>
        <ul>
          <Flex height="75vh" alignItems={"flex-start"} paddingLeft={3}>
            {apps.map((app: myApp) => (
              <li key={app.id}>
                <Anchor>
                  <AppIcon app={app} />
                </Anchor>
              </li>
            ))}
          </Flex>
        </ul>
      </Box>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "myapp" });
  return {
    props: {
      apps: data.contents,
    },
  };
};

export type Props = {
  apps: myApp[];
};

export default AppsPage;
