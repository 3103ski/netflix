import React from 'react';
import { Image, Title, SubTitle, Item, Pane, Container, Inner } from './styles/jumbotron';

export default function Jumbtron({ children, direction = 'row', ...restProps }) {
	return (
		<Item {...restProps}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbtron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};
Jumbtron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};
Jumbtron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Jumbtron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbtron.Image = function JumbotronSImage({ children, ...restProps }) {
	return <Image {...restProps} />;
};
