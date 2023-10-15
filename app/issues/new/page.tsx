'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const NewIssue = () => {
	return (
		<Wrapper>
			<form data-color-mode='light' className='space-y-5 max-w-xl mx-auto'>
				<Input placeholder='Title' />
				<SimpleMDE placeholder='Description' options={{ status: false }} />
				<Button type='submit'>Submit</Button>
			</form>
		</Wrapper>
	)
}
export default NewIssue
