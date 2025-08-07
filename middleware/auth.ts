// middleware/auth.ts
import { verifyToken } from "@/utils/jwt";

export async function getUserFromRequest(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  const token = auth.split(" ")[1];
  try {
    const decoded = verifyToken(token) as { id: string };
    return decoded;
  } catch {
    return null;
  }
}
