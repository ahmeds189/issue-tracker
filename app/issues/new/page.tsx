'use client'
import Markdown from '@/components/Markdown'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type Inputs = z.infer<typeof newIssueSchema>

const NewIssue = () => {
	const router = useRouter()
	const [error, setError] = useState('')

	const form = useForm<Inputs>({
		resolver: zodResolver(newIssueSchema),
		defaultValues: {
			title: '',
			description: '',
		},
	})

	const onSubmit = async (date: Inputs) => {
		try {
			await axios.post('/api/issues', date)
			router.push('/issues')
			form.reset()
		} catch (error) {
			setError('an unexpected error occurred')
		}
	}
	return (
		<Wrapper>
			{error && (
				<Alert variant='destructive' className='max-w-xl mx-auto mb-6'>
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
			<Form {...form}>
				<form
					className='max-w-xl mx-auto'
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
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
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Markdown />
								</FormControl>
								<div className='h-8 '>
									<FormMessage />
								</div>
							</FormItem>
						)}
					/>

					<Button type='submit'>Submit</Button>
				</form>
			</Form>
		</Wrapper>
	)
}
export default NewIssue
