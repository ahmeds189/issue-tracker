import { IssueStatus } from '@prisma/client'
import { Badge } from '../../components/ui/badge'

const statusMap: Record<
	IssueStatus,
	{
		label: string
		bg: 'bg-green-200' | 'bg-purple-200' | 'bg-red-200'
		color: 'text-green-700' | 'text-purple-700' | 'text-red-700'
	}
> = {
	IN_PROGRESS: {
		label: 'in progress',
		bg: 'bg-purple-200',
		color: 'text-purple-700',
	},
	OPEN: { label: 'open', bg: 'bg-red-200', color: 'text-red-700' },
	CLOSED: { label: 'closed', bg: 'bg-green-200', color: 'text-green-700' },
}

const IssueBadge = ({ status }: { status: IssueStatus }) => {
	return (
		<Badge
			className={`rounded-sm hover:${statusMap[status].bg} ${statusMap[status].bg} ${statusMap[status].color}`}
		>
			{statusMap[status].label}
		</Badge>
	)
}

export default IssueBadge
