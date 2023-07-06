import { withSessionRoute } from "@/pages/lib/withSession";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(logout);

async function logout(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.send({ ok: true });
}
