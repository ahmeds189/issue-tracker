import { object, string } from 'zod'

export const newIssueSchema = object({
	title: string().min(1).max(255),
	description: string().min(1),
})
