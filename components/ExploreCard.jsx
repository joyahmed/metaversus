'use client';

import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExploreCard = ({
	id,
	imgUrl,
	title,
	index,
	active,
	setActive
}) => {

	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className={`relative flex items-center justify-center min-w-[170px] h-[700px] transiton-[flex] duration-[0.8s] ease-out-flex cursor-pointer ${
				active === id
					? 'lg:flex-[3.5] flex-[10]'
					: 'lg:flex-[0.5] flex-[2]'
        }`}

        onClick={() => setActive(id)}
		>
			<Image
				src={imgUrl}
				alt={title}
				fill
				className='object-cover rounded-[24px]'
			/>
			{active !== id ? (
				<h3 className='font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
					{title}
				</h3>
			) : (
          <div className='absolute bottom-0 flex-col justify-start w-full bg-[rgba(0,0,0, 0.5)] rounded-b-[24px] p-8'

          >
					<div
						className='flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'
					>
						<Image
							src='/headset.svg'
							alt='headset'
							width={0}
							height={0}
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>
					<p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
						Enter the Metaverse
					</p>
					<h2 className='mt-[24px] font-semibold text-[24px] sm:text-[32px] text-white'>
						{title}
					</h2>
				</div>
			)}
		</motion.div>
	);
};

export default ExploreCard;
