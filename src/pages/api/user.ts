import { NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../lib/withSession";

export type User = {
  username: string;
  isAdmin: boolean;
};

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isAdmin: true,
    });
  } else {
    res.json({
      username: "",
      isAdmin: false,
    });
  }
}

export default withSessionRoute(userRoute);
