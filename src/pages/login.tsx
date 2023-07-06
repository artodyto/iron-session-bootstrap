import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";

const LoginPage = () => {
  const router = useRouter();
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailInput?.current?.value;
    const password = passwordInput?.current?.value;

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return router.push("/private");
    }
  };

  return (
    <Layout user={null}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email: <input type="text" ref={emailInput} className="text-black" />
          </label>
        </div>
        <div>
          <label>
            Password:{" "}
            <input type="password" ref={passwordInput} className="text-black" />
          </label>
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </Layout>
  );
};

export default LoginPage;
