'use client';

import { ExploreCard, TitleText, TypingText } from '@/components';
import { exploreWorlds } from '@/constants';
import { navVariants, staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Explore = () => {
	const [active, setActive] = useState('world-2');

	return (
		<section className='flex items-center justify-center w-full paddings'>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className='flex flex-col innerWidth'
			>
				<TypingText
					{...{ title: '| The World', textStyles: 'text-center' }}
				/>
				<TitleText
					{...{
						title: (
							<>
								Choose the world you want{' '}
								<br className='hidden md:block' /> to explore
							</>
						),
						textStyles: 'text-center'
					}}
				/>

				<div className='flex flex-col lg:flex-row w-full min-h-[70vh] mt-[50px] gap-5'>
					{exploreWorlds.map((world, index) => (
						<ExploreCard
              key={world.id}

							{...{...world, index, active, setActive }}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Explore;
