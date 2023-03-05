import { PersonIcon, HomeIcon, AppsIcon } from "@/components/atoms/IconButton";
import Text from "@/components/atoms/Text";
import Box from "@/components/layout/Box";
import Flex from "@/components/layout/Flex";
import { theme } from "@/themes";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const CurrUrl = (): String => {
  const router = useRouter();
  return router.asPath;
};

const HeaderRoot = styled.header`
    height: 100px
    padding: ${({ theme }) => theme.space[2]} 0px;
    border-bottom: 1px solid${({ theme }) => theme.colors.border};
    background-color: ${theme.colors.white}
`;
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;
const NavLink = styled.span`
  display: inline;
`;
const Anchor = styled(Flex)<{ url: string }>`
  color: ${theme.colors.black};
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  border-bottom: ${({ url }) =>
    CurrUrl().split("/")[1] === url ? "4px solid blue" : ""};
  color: ${({ url }) => (CurrUrl().split("/")[1] === url ? "blue" : "")};
`;

const Header = () => {
  return (
    <HeaderRoot>
      <Flex
        paddingLeft={3}
        paddingRight={3}
        paddingTop={1}
        justifyContent="space-between"
      >
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Link href="/" passHref>
              <Anchor url={""}>
                <HomeIcon />
              </Anchor>
            </Link>
          </NavLink>
        </Nav>
        <Nav as="nav" height="56px" alignItems="center">
          <NavLink>
            <Box>
              <Link href="/profile" passHref>
                <Anchor url={"profile"}>
                  <Flex
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyItems={"center"}
                  >
                    <PersonIcon />
                    <Text>Profile</Text>
                  </Flex>
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box width={"100%"}>
              <Link href="/app" passHref>
                <Anchor url={"app"}>
                  <Flex flexDirection={"column"}>
                    <AppsIcon />
                    <Text>Apps</Text>
                  </Flex>
                </Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
