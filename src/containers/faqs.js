import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faq.json';

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			{faqsData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
			<OptForm>
				<OptForm.Input placeholder='Enter email address'></OptForm.Input>
				<OptForm.Button>Try It Now</OptForm.Button>
				<OptForm.Break></OptForm.Break>
				<OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
			</OptForm>
		</Accordion>
	);
}
