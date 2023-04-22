import { AiOutlineSend } from 'react-icons/ai';

import { conversationFormSchema } from './ConversationForm.schemas';

import { Input } from '@/components/common/Input/Input';
import { useTeamMessages } from '@/hooks/useTeamMessages';
import { useZodForm } from '@/hooks/useZodForm';

export const ConversationForm = () => {
	const { createTeamMessageMutation } = useTeamMessages();
	const {
		handleFormSubmit,
		register,
		reset,
		formState: { errors },
	} = useZodForm(conversationFormSchema, {
		onSubmit: ({ message }) => {
			createTeamMessageMutation.mutate(message);
			reset();
		},
	});

	return (
		<form onSubmit={handleFormSubmit} className="flex flex-col space-y-2.5">
			<Input
				type="text"
				placeholder="Please enter a message"
				autoComplete="off"
				error={errors.message?.message}
				{...register('message')}
			/>
			<button
				type="submit"
				aria-label="Send message"
				className="ml-auto text-xl text-gray-500 hover:text-primary"
			>
				<AiOutlineSend />
			</button>
		</form>
	);
};
