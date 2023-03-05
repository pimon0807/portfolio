import Separator from "@/components/atoms/Separator";
import Box from "@/components/layout/Box";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Header />
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
