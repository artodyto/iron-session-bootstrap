import { IronSessionOptions } from "iron-session";
import { User } from "../api/user";

export const ironOptions: IronSessionOptions = {
  cookieName: "MY_APP_COOKIE",
  password: "3G6Tb8kP9Yq7RDZX5x2s4eFV7hJ2mN1C",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}
