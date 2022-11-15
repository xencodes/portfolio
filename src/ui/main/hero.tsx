import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { DESCRIPTION_SHORT, FIRST_NAME, LAST_NAME } from '@/config/profile';
import Social from './social';

const Hero: React.FC = () => {
	return (
		<Box>
			<Flex pt={44} maxW='7xl' m='auto' flexDirection='column' gap={4}>
				<Box>
					<Heading fontSize='8xl'>{FIRST_NAME}</Heading>
					<Heading fontSize='8xl' color='green.400'>
						{LAST_NAME}.
					</Heading>
				</Box>

				<Text fontSize='4xl' color='gray.600'>
					{DESCRIPTION_SHORT}
				</Text>

				<Box>
					<Social />
				</Box>
			</Flex>
		</Box>
	);
};

export default Hero;
