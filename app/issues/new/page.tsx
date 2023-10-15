'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { newIssueSchema } from '@/lib/schema'
import SimpleMDE from 'react-simplemde-editor'
import { z } from 'zod'
import 'easymde/dist/easymde.min.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type Inputs = z.infer<typeof newIssueSchema>

const NewIssue = () => {
	const router = useRouter()
	const [error, setError] = useState('')

	const { register, handleSubmit, control, reset } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = async (date) => {
		try {
			await axios.post('/api/issues', date)
			router.push('/issues')
			reset()
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
			<form
				className='space-y-5 max-w-xl mx-auto'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Input placeholder='Title' {...register('title')} />
				<Controller
					name='description'
					control={control}
					render={({ field }) => (
						<SimpleMDE placeholder='Description' {...field} />
					)}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</Wrapper>
	)
}
export default NewIssue
