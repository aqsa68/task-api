import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/middleware/auth";

export async function PUT(req: Request, { params }: any) {
  const user = await getUserFromRequest(req);
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { title, description, status } = await req.json();
  const task = await prisma.task.update({
    where: { id: params.id },
    data: { title, description, status },
  });
  return Response.json(task);
}

export async function DELETE(req: Request, { params }: any) {
  const user = await getUserFromRequest(req);
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.task.delete({ where: { id: params.id } });
  return Response.json({ message: "Task deleted" });
}
