import { auth } from "../../../auth";

export const GET = auth((req) => {
  if (req.auth) {
    return Response.json({ data: "Success" });
  }
  return Response.json({
    data: "You must be logged in." + JSON.stringify(req),
  });
});
