import { GitHubIcon } from "@/components/atoms/IconButton";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import Link from "next/link";
import styled from "styled-components";

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <footer>
      <Flex flexDirection={{ base: "column", md: "row" }}>
        <Box minWidth={{ base: "100%", md: "120px" }}>
          <nav>
            <Anchor>
              <Link href={"https://github.com/pimon0807/portfolio"}>
                <GitHubIcon size={22} />
              </Link>
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box paddingTop={3} paddingBottom={2}>
        <Text>© Koki Arakawa All rigtht reseved.</Text>
      </Box>
    </footer>
  );
};

export default Footer;
