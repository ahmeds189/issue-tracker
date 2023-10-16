'use client'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Wrapper from '@/components/wrapper'
import { newIssueSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { LoaderIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import Tiptap from '@/components/Tiptap'

type Inputs = z.infer<typeof newIssueSchema>

const NewIssue = () => {
	const router = useRouter()

	const form = useForm<Inputs>({
		resolver: zodResolver(newIssueSchema),
		defaultValues: {
			title: '',
			// description: ,
		},
	})

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = form

	const onSubmit = async (date: Inputs) => {
		// try {
		// 	await axios.post('/api/issues', date)
		// 	router.push('/issues')
		// 	toast.success('Issue has been created')
		// 	reset()
		// } catch (error) {
		// 	toast.error(`${error}`)
		// }
		console.log(date)
	}
	return (
		<Wrapper>
			<Form {...form}>
				<form className='max-w-xl mx-auto' onSubmit={handleSubmit(onSubmit)}>
					<FormField
						control={control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='issue title' {...field} />
								</FormControl>
								<div className='h-8'>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Tiptap description={field.value} onChange={field.onChange} />
								</FormControl>
								<div className='h-8'>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>

					<Button type='submit' disabled={isSubmitting}>
						{isSubmitting ? 'Submitting' : 'Submit'}
						{isSubmitting && (
							<LoaderIcon className='animate-spin ml-2' size={20} />
						)}
					</Button>
				</form>
			</Form>
		</Wrapper>
	)
}
export default NewIssue
