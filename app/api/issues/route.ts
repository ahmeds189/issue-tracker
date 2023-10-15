import { NextRequest, NextResponse } from 'next/server'
import { newIssueSchema } from '@/lib/schema'
import prisma from '@/prisma/client'

export async function POST(request: NextRequest) {
	const body = newIssueSchema.safeParse(await request.json())

	if (!body.success)
		return NextResponse.json(body.error.errors, { status: 400 })

	const newIssue = await prisma.issue.create({
		data: { title: body.data.title, description: body.data.description },
	})

	return NextResponse.json(newIssue)
}
