import { User } from "@/pages/api/user";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

const List = ({
  title,
  href,
  isFirstItem,
  className,
  onClick,
}: {
  title: string;
  href: string;
  isFirstItem?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => Promise<void>;
}) => (
  <li
    className={clsx("mr-1 flex", className, {
      ["ml-auto"]: isFirstItem,
    })}
  >
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        className="text-white no-underline flex items-center"
      >
        {title}
      </a>
    </Link>
  </li>
);

export default function Header({ user }: { user: User | null }) {
  const router = useRouter();

  return (
    <header className="bg-gray-500 text-white p-1 flex justify-end container mx-auto max-w-md px-2">
      <nav>
        <ul className="flex list-none ml-0 pl-0">
          <List title="Home" href="/" />
          {user ? (
            <List
              title="Logout"
              href="/api/logout"
              onClick={async (e) => {
                e.preventDefault();
                await fetch("/api/logout", { method: "POST" });
                router.push("/login");
              }}
            />
          ) : (
            <Link href="/login" legacyBehavior>
              <a>Login</a>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
