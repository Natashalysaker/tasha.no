import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Natasha Lysaker</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
}
