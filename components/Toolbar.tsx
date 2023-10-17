'use client'

import { type Editor } from '@tiptap/react'
import {
	Bold,
	Italic,
	Heading2,
	Strikethrough,
	List,
	ListOrdered,
} from 'lucide-react'
import { Toggle } from './ui/toggle'

interface Props {
	editor: Editor | null
}

const Toolbar = ({ editor }: Props) => {
	if (!editor) {
		return null
	}

	return (
		<div className='border border-input rounded-md space-x-2 px-2 py-1'>
			<Toggle
				size='sm'
				aria-label='Toggle heading'
				pressed={editor.isActive('heading')}
				onPressedChange={() =>
					editor.chain().focus().toggleHeading({ level: 2 }).run()
				}
			>
				<Heading2 size={19} />
			</Toggle>
			<Toggle
				size='sm'
				aria-label='Toggle bold'
				pressed={editor.isActive('bold')}
				onPressedChange={() => editor.chain().focus().toggleBold().run()}
			>
				<Bold size={19} />
			</Toggle>
			<Toggle
				size='sm'
				aria-label='Toggle italic'
				pressed={editor.isActive('italic')}
				onPressedChange={() => editor.chain().focus().toggleItalic().run()}
			>
				<Italic size={19} />
			</Toggle>
			<Toggle
				size='sm'
				aria-label='Toggle strike'
				pressed={editor.isActive('strike')}
				onPressedChange={() => editor.chain().focus().toggleStrike().run()}
			>
				<Strikethrough size={19} />
			</Toggle>
			<Toggle
				size='sm'
				aria-label='Toggle strike'
				pressed={editor.isActive('bulletList')}
				onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
			>
				<List />
			</Toggle>
			<Toggle
				size='sm'
				aria-label='Toggle strike'
				pressed={editor.isActive('orderdList')}
				onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
			>
				<ListOrdered />
			</Toggle>
		</div>
	)
}
export default Toolbar
