import { buttonVariants } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Issue = () => {
	return (
		<Wrapper>
			<header className='flex justify-between'>
				<h1 className='font-bold text-3xl'>Issues</h1>
				<Link
					href='/issues/new'
					className={cn(
						buttonVariants(),
						'bg-violet-600 text-lg hover:bg-violet-500'
					)}
				>
					New Issue
				</Link>
			</header>
			<p>all issues here</p>
		</Wrapper>
	)
}
export default Issue
