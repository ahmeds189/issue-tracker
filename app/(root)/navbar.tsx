'use client'
import { buttonVariants } from '@/components/ui/button'
import Wrapper from '@/components/wrapper'
import Link from 'next/link'

const routes = [
	{ title: 'Dashboard', href: '/' },
	{ title: 'Issues', href: '/Issues' },
]

const Navbar = () => {
	return (
		<nav className='shadow-sm py-4'>
			<Wrapper className='flex items-center'>
				<Link href='/'>
					<img src='/issue.svg' alt='gear and alert logo' className='w-12' />
				</Link>
				<ul className='flex items-center ml-auto space-x-6'>
					{routes.map((route) => (
						<li key={route.href}>
							<Link href={route.href} className='font-semibold'>
								{route.title}
							</Link>
						</li>
					))}
					<li>
						<Link href='/' className={buttonVariants({ size: 'sm' })}>
							Get started
						</Link>
					</li>
				</ul>
			</Wrapper>
		</nav>
	)
}
export default Navbar
