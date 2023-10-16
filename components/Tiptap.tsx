'use client'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'

interface Props {
	description: JSONContent
	onChange: (richText: JSONContent) => void
}

const Tiptap = ({ description, onChange }: Props) => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				heading: {
					HTMLAttributes: {
						class: 'text-2xl font-bold',
					},
				},
			}),
			Placeholder.configure({
				placeholder: 'write something …',
			}),
		],
		content: description,
		editorProps: {
			attributes: {
				class:
					'rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-full',
			},
		},
		onUpdate({ editor }) {
			onChange(editor.getJSON())
		},
	})

	return (
		<div className='flex flex-col space-y-4 h-60'>
			<Toolbar editor={editor} />
			<EditorContent editor={editor} className='flex-1 overflow-y-auto' />
		</div>
	)
}

export default Tiptap
