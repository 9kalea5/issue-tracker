import { issueSchema, issueUpdateSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const validation = issueUpdateSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 });

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }, // remove parseInt if id is string
    });
    if (!issue) return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

    const updatedIssue = await prisma.issue.update({
      where: { id: issue.id },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.description !== undefined && { description: body.description }),
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest, { params }: { params: { id: string }}){
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(params.id)}
    })

    if (!issue)
        return NextResponse.json({error: 'Invalid issue'}, { status: 404 })

    await prisma.issue.delete({
        where: { id: issue.id }
    })

    return NextResponse.json({})
}