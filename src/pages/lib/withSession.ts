import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
} from "next";
import { ironOptions } from "./iron-config";

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, ironOptions);
}

export function withSessionSsr(
  handler: (
    context: GetServerSidePropsContext
  ) =>
    | GetServerSidePropsResult<{ [key: string]: any }>
    | Promise<GetServerSidePropsResult<{ [key: string]: any }>>
) {
  return withIronSessionSsr(handler, ironOptions);
}
