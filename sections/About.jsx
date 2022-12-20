'use client';

import { TypingText } from '@/components';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const About = () => (
	<section className='relative paddings z-10'>
		<div className='gradient-02 z-0'></div>
		<motion.div
			varitants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className='flex-center flex-col innerWidth mx-auto'
		>
			<TypingText
				{...{
					title: '| About Metaversus',
					textStyles: 'text-center'
				}}
			/>

			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className='mt-[8px] font-normal text-[20px] sm:text-[32px] text-center text-secondary-white'
			>
				<span className='font-extrabold text-white'>Metaverse </span>
				is a new thing in the future, where you can enjoy the virtual
				world by feeling like it&apos;s really real, you can feel what
				you feel in this metaverse world, because this is really the
				<span className='font-extrabold text-white'>
					{' '}
					madness of the metaverse{' '}
				</span>
				of today, using only
				<span className='font-extrabold text-white'> VR </span>
				devices you can easily explore the metaverse world you want,
				turn your dreams into reality. Let&apos;s{' '}
				<span className='font-extrabold text-white'> explore </span>
				the madness of the metaverse by scrolling down
			</motion.p>
		</motion.div>
		<motion.div
			variants={fadeIn('up', 'tween', 0.3, 1)}
			initial='hidden'
			whileInView='show'
			className='flexCenter w-full mt-[28px]'
		>
			<Image
				src='/arrow-down.svg'
				alt='arrow down'
				width={18}
				height={28}
			/>
		</motion.div>
	</section>
);

export default About;
