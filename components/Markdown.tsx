import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const Markdown = () => {
	return <SimpleMDE options={{ status: false }} placeholder='Description' />
}
export default Markdown
