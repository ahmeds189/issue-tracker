import { Input } from '@/components/ui/input'
import Wrapper from '@/components/wrapper'

const NewIssue = () => {
	return (
		<Wrapper>
			<form data-color-mode='light'>
				<Input placeholder='Title' />
			</form>
		</Wrapper>
	)
}
export default NewIssue
