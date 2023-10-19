import IssuesTable from '@/app/issues/IssuesTable'
import TableSkeleton from '@/app/issues/TableSkeleton'
import { buttonVariants } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Suspense } from 'react'

const Issue = () => {
	return (
		<Wrapper>
			<header className='flex justify-between mb-12'>
				<h1 className='font-bold text-3xl'>Issues</h1>
				<Link
					href='/issues/new'
					className={cn(buttonVariants(), 'font-semibold')}
				>
					New Issue
				</Link>
			</header>
			<Suspense fallback={<TableSkeleton />}>
				<IssuesTable />
			</Suspense>
		</Wrapper>
	)
}
export default Issue
