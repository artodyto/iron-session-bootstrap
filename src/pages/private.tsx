import React from "react";
import { withSessionSsr } from "./lib/withSession";
import { User } from "./api/user";
import Layout from "@/components/Layout";

const PrivatePage: React.FC<{ user: User }> = ({ user }) => (
  <Layout user={user}>
    <h1>Hello {user.username}</h1>
    <p>Secret Content</p>
  </Layout>
);

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
});

export default PrivatePage;
