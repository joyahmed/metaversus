'use client';

import { navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial='hidden'
		whileInView='show'
		className='xPaddings py-8 relative text-black'
	>
		<div className='absolute w-[50%] inset-0 gradient-01' />
		<div className='flex justify-between innerWidth mx-auto gap-8'>
			<Image src='/search.svg' alt='Search' width={24} height={24} />
			<h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
				METAVERSUS
			</h2>

			<Image src='/menu.svg' alt='Menu' width={24} height={24} />
		</div>
	</motion.nav>
);

export default Navbar;
