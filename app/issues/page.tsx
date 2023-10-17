import IssuesTable from '@/components/IssuesTable'
import { buttonVariants } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import { cn } from '@/lib/utils'
import prisma from '@/prisma/client'
import Link from 'next/link'
import parse from 'html-react-parser'
import IssueBadge from '@/components/IssueBadge'

const Issue = async () => {
	const issues = await prisma.issue.findMany()

	return (
		<Wrapper>
			<header className='flex justify-between mb-12'>
				<h1 className='font-bold text-3xl'>Issues</h1>
				<Link href='/issues/new' className={cn(buttonVariants(), 'text-lg')}>
					New Issue
				</Link>
			</header>
			<IssuesTable />
			<IssueBadge status={issues[2].status} />
			<IssueBadge status={issues[3].status} />
			<IssueBadge status={issues[4].status} />
			{parse(issues[2].description)}
		</Wrapper>
	)
}
export default Issue
