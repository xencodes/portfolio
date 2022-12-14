import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import {
	SiTypescript,
	SiReact,
	SiNodedotjs,
	SiMongodb,
	SiNextdotjs,
	SiSketch,
	SiFirebase,
} from 'react-icons/si';
import { IoPrism } from 'react-icons/io5';

type TechItemProps = {
	title: string;
	icon: React.ReactNode;
	clr: string;
	tags?: string[];
};
const TechItem: React.FC<TechItemProps> = ({ title, icon, clr }) => {
	return (
		<Box
			cursor='pointer'
			_active={{ transform: 'scale(0.95)' }}
			transition='all 0.2s ease-in-out'
			userSelect='none'
			p={12}
		>
			<Center>
				<Box rounded='xl' fontSize='7xl' color={`${clr}.500`}>
					{icon}
				</Box>
			</Center>
			<Center mt={2}>
				<Heading size='md'>{title}</Heading>
			</Center>
		</Box>
	);
};

const Tech = () => {
	return (
		<Box px={{ base: 4, lg: 0 }}>
			<Box maxW='7xl' m='auto'>
				<Heading mt={2} size='2xl'>
					Technologies, I have worked on...
				</Heading>

				<SimpleGrid mt={12} columns={{ base: 2, lg: 4 }} spacing={4}>
					<TechItem clr='blue' title='React' icon={<SiReact />} />
					<TechItem clr='blue' title='TypeScript' icon={<SiTypescript />} />
					<TechItem clr='green' title='Node.js' icon={<SiNodedotjs />} />
					<TechItem clr='gray' title='Prisma' icon={<IoPrism />} />
					<TechItem clr='green' title='MongoDB' icon={<SiMongodb />} />
					<TechItem clr='black' title='Next.js' icon={<SiNextdotjs />} />
					<TechItem clr='yellow' title='Sketch' icon={<SiSketch />} />
					<TechItem clr='yellow' title='Firebase' icon={<SiFirebase />} />
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default Tech;
