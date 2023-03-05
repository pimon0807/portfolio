import styled from "styled-components";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import Flex from "@/components/layout/Flex";
import Box from "@/components/layout/Box";
import Layout from "@/components/templates/Layout";
import { ArrowRightIcon } from "@/components/atoms/IconButton";
import { theme } from "@/themes";

export default function Home() {
  const FadeinText = styled(Text)`
    animation-name: fadeInAnime;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    opacity: 0;

    @keyframes fadeInAnime {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `;

  const Anchor = styled(Flex)`
    color: ${theme.colors.black};
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 1;
      background-color: #eeeeee;
    }
    &:active {
      background-color: #dddddd;
    }
  `;

  return (
    <Layout title="トップ | Koki Arakawa's Portfolio">
      <Flex
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        height="75vh"
      >
        <FadeinText
          as="h1"
          textAlign="center"
          fontSize="extraLarge"
          lineHeight={0}
        >
          Koki Arakawa&apos;s
        </FadeinText>
        <FadeinText as="h3" textAlign="center" fontSize="large" lineHeight={0}>
          PORTFOLIO
        </FadeinText>
        <FadeinText>
          <Flex alignContent="center" justifyContent="center">
            <Box>
              <Link href="/profile">
                <Anchor>
                  <Text textAlign="center">ABOUT ME</Text>
                  <ArrowRightIcon />
                </Anchor>
              </Link>
            </Box>
          </Flex>
        </FadeinText>
      </Flex>
    </Layout>
  );
}
