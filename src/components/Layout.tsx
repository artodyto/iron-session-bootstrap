import Head from "next/head";
import Header from "./Header";
import { User } from "@/pages/api/user";

export default function Layout({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Next Iron Session Bootstrap</title>
      </Head>

      <main>
        <Header user={user} />
        <div className="container mx-auto max-w-md">{children}</div>
      </main>
    </>
  );
}
