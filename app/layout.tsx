import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'text-gray-800 min-h-[100svh] flex flex-col',
					inter.className
				)}
			>
				<Navbar />
				<main className='flex-1 py-12'>{children}</main>
			</body>
		</html>
	)
}
