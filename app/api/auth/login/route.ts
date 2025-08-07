import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";
import { signToken } from "@/utils/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return Response.json({ error: "Invalid credentials" }, { status: 401 });

  const match = await compare(password, user.password);
  if (!match) return Response.json({ error: "Invalid credentials" }, { status: 401 });

  const token = signToken({ id: user.id, email: user.email });
  return Response.json({ token });
}
