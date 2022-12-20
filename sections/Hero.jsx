'use client';

import {
	slideIn,
	staggerContainer,
	textVariant
} from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => (
	<section className='yPaddings sm:pl-16 pl-6'>
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='flex flex-col innerWidth mx-auto'
		>
			<div className='relative flex flex-col items-center justify-center z-10'>
				<motion.h1
					variants={textVariant(1.1)}
					className='heroHeading'
				>
					Metaverse
				</motion.h1>
				<motion.div
					variants={textVariant(1.2)}
					className='flex flex-row justify-center items-center'
				>
					<h1 className='heroHeading'>Ma</h1>
					<div className='heroDText'></div>
					<h1 className='heroHeading'>Ness</h1>
				</motion.div>
			</div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='relative w-full -mt-[12px] md:-mt-[20px]'
			>
				<div className='relative w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
				<Image
					src='/cover.png'
					alt='cover'
					fill
					className='object-cover rounded-tl-[140px] z-10'
				/>
				<Link
					href='#explore'
					className='flex items-center justify-end w-[95%]'
				>
					<div className='relative flex w-[100px] h-[100px] sm:w-[155px] sm:h-[155px] -mt-[50px] sm:-mt-[70px] pr-[40px] z-10'>
						<Image
							src='/stamp.png'
							alt='stamp'
							fill
							className='object-contain mt-16'
						/>
					</div>
				</Link>
			</motion.div>
		</motion.div>
	</section>
);

export default Hero;
