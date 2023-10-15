import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const Wrapper = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				'mx-auto max-w-6xl w-full px-2.5 md:px-10 xl:px-20',
				className
			)}
		>
			{children}
		</div>
	)
}
export default Wrapper
