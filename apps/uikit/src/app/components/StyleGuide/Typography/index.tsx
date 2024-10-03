import React from 'react';
import {
	ExampleContent,
	FlexBox,
	ParagraphContainer,
	TagLabel,
	TagText,
	TagUnderlinedText,
	TypographySectionWrapper,
} from '@react-monorepo/shared-ui';

export const TypographyExample: React.FC<{
	tag: string;
	children: React.ReactNode;
}> = ({ tag, children }) => (
	<FlexBox
		direction="row"
		gap="4"
		wrap="nowrap"
		justify="between"
		align="center"
	>
		<TagLabel>
			<TagText>{tag}</TagText>
		</TagLabel>
		<ExampleContent>{React.createElement(tag, {}, children)}</ExampleContent>
	</FlexBox>
);

export const TypographySection: React.FC = () => (
	<TypographySectionWrapper $isbig={true}>
		<TagUnderlinedText>Headlines</TagUnderlinedText>
		<TypographyExample tag="h1">This is the styleguide</TypographyExample>
		<TypographyExample tag="h2">This is the styleguide</TypographyExample>
		<TypographyExample tag="h3">This is the styleguide</TypographyExample>
		<TypographyExample tag="h4">This is the styleguide</TypographyExample>
		<TypographyExample tag="h5">This is the styleguide</TypographyExample>
		<ParagraphContainer
			direction="column"
			gap="0"
			wrap="nowrap"
			justify="between"
			align="start"
		>
			<TagUnderlinedText>Paragraph</TagUnderlinedText>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				dolore rem modi laboriosam deleniti vitae. Aspernatur saepe itaque,
				numquam autem inventore, magnam, aperiam quidem quis ea id minima nemo
				corporis!
			</p>
		</ParagraphContainer>
	</TypographySectionWrapper>
);