import { object, string } from 'zod'

export const newIssueSchema = object({
	title: string().min(1, 'Title is required!').max(255),
	description: string().min(1, 'description is required!'),
})
