import IssuesTable from '@/app/issues/IssuesTable'
import TableSkeleton from '@/app/issues/TableSkeleton'
import { buttonVariants } from '@/components/ui/button'
import { TableCaption } from '@/components/ui/table'
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
			<div className='border border-input rounded-md'>
				<Suspense fallback={<TableSkeleton />}>
					<IssuesTable />
				</Suspense>
			</div>
			<p className='mt-3 text-center text-muted-foreground text-sm'>
				A list of your recent issues.
			</p>
		</Wrapper>
	)
}
export default Issue
