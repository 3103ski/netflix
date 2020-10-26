import React from 'react';
import { OptForm, Feature } from '../components';
import { Faqs, Jumbortron, Footer, HeaderContainer } from '../containers';

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>
					<OptForm>
						<OptForm.Input placeholder='Enter email address'></OptForm.Input>
						<OptForm.Button>Try It Now</OptForm.Button>
						<OptForm.Break></OptForm.Break>
						<OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<Jumbortron />
			<Faqs />
			<Footer />
		</>
	);
}
