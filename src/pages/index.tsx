import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
import { withSessionSsr } from "./lib/withSession";
import { User } from "./api/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ user }: { user: User | null }) {
  return (
    <Layout user={user}>
      <p>This is default page you'll see</p>
    </Layout>
  );
}

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (!user) {
    return {
      props: { user: null },
    };
  }

  return {
    props: { user },
  };
});
