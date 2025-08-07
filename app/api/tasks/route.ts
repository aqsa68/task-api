import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/middleware/auth";

export async function GET(req: Request) {
  const user = await getUserFromRequest(req);
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const status = searchParams.get("status");

  const where: any = { userId: user.id };
  if (category) where.category = { name: category };
  if (status) where.status = status;

  const tasks = await prisma.task.findMany({ where, include: { category: true } });
  return Response.json(tasks);
}

export async function POST(req: Request) {
  const user = await getUserFromRequest(req);
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, categoryId } = await req.json();
  const task = await prisma.task.create({
    data: { title, description, userId: user.id, categoryId }
  });
  return Response.json(task);
}
