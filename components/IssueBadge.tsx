import { IssueStatus } from '@prisma/client'
import { Badge } from './ui/badge'

const IssueBadge = ({ status }: { status: IssueStatus }) => {
	switch (status) {
		case IssueStatus.CLOSED:
			return (
				<Badge
					variant='outline'
					className='font-medium rounded-sm bg-green-200 text-green-700'
				>
					closed
				</Badge>
			)

		case IssueStatus.IN_PROGRESS:
			return (
				<Badge
					variant='outline'
					className='font-medium rounded-sm bg-purple-200 text-purple-700'
				>
					in progress
				</Badge>
			)

		default:
			return (
				<Badge
					variant='outline'
					className='font-medium rounded-sm bg-red-200 text-red-700'
				>
					opened
				</Badge>
			)
	}
}
export default IssueBadge
