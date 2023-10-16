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
import { useToast } from '@/components/ui/use-toast'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

type Inputs = z.infer<typeof newIssueSchema>

const NewIssue = () => {
	const router = useRouter()
	const { toast } = useToast()

	const form = useForm<Inputs>({
		resolver: zodResolver(newIssueSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	})

	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = form

	const onSubmit = async (date: Inputs) => {
		try {
			await axios.post('/api/issuesweff', date)
			router.push('/issues')
			toast({
				description: 'Your issue has been submitted.',
			})
			reset()
		} catch (error) {
			toast({
				variant: 'destructive',
				title: 'Uh oh! Something went wrong.',
				description: `${error}`,
			})
		}
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
									<Input placeholder='Title' {...field} />
								</FormControl>
								<div className='h-8 '>
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
									<SimpleMDE placeholder='Description' {...field} />
								</FormControl>
								<div className='h-8 '>
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
