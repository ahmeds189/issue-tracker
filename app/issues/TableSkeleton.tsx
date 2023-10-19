import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const TableSkeleton = () => {
	const issues = [1, 2, 3, 4, 5]
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
					<TableRow key={issue}>
						<TableCell className='font-semibold'>
							<div className='block md:hidden mb-2'>
								<Skeleton className='w-[80px] h-[20px]' />
							</div>
							<Skeleton className='w-[150px] h-[20px]' />
						</TableCell>
						<TableCell className='hidden md:table-cell'>
							<Skeleton className='w-[70px] h-[20px] ' />
						</TableCell>
						<TableCell className='hidden md:table-cell'>
							<Skeleton className='w-[150px] h-[20px]' />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
export default TableSkeleton
