import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import type { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");

  let userId: string;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    userId = decoded.id;
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { name } = await req.json();

  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Category name is required" }, { status: 400 });
  }

  try {
    const category = await prisma.category.create({
      data: {
        name,
        userId,
      } as Prisma.CategoryUncheckedCreateInput,
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
