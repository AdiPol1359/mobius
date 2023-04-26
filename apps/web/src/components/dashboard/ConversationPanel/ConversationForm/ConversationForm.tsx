import { AiOutlineSend } from 'react-icons/ai';

import { useConversationForm } from './useConversationForm';

import { Input } from '@/components/common/Input/Input';

export const ConversationForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useConversationForm();

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
