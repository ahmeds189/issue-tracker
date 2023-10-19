import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import prisma from '@/prisma/client'
import IssueBadge from './IssueBadge'

const IssuesTable = async () => {
	const issues = await prisma.issue.findMany()

	return (
		<Table>
			<TableCaption className='text-center'>
				A list of your recent issues.
			</TableCaption>

			<TableHeader>
				<TableRow>
					<TableHead>Issue</TableHead>
					<TableHead className='hidden md:table-cell'>Status</TableHead>
					<TableHead className='hidden md:table-cell'>Created</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{issues.map((issue) => (
					<TableRow key={issue.id}>
						<TableCell className='font-semibold'>
							<div className='block md:hidden mb-2'>
								<IssueBadge status={issue.status} />
							</div>
							{issue.title}
						</TableCell>
						<TableCell className='hidden md:table-cell'>
							<IssueBadge status={issue.status} />
						</TableCell>
						<TableCell className='hidden md:table-cell'>
							{issue.created_at.toDateString()}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
export default IssuesTable
