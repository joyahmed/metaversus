'use client';

import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';

export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		className={`${textStyles} font-normal text-[14px] text-secondary-white`}
	>
		{Array.from(title).map((letter, index) => (
      <motion.span key={index}
      varianst={textVariant2}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
		))}
	</motion.p>
);

export const TitleText = ({ title, textStyles }) => (
	<h2>Title Text</h2>
);
