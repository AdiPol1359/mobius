'use client';

import {
	AiOutlineFileImage,
	AiOutlineMeh,
	AiOutlineSend,
} from 'react-icons/ai';

import { Input } from '@/components/common/Input/Input';
import { useZodForm } from '@/hooks/useZodForm';

import { ActionList } from './ActionList';
import { sendMessageFormSchema } from './SendMessageForm.schemas';

export const SendMessageForm = () => {
	const {
		handleFormSubmit,
		register,
		reset,
		formState: { errors },
	} = useZodForm(sendMessageFormSchema, {
		onSubmit: () => {
			reset();
		},
	});

	return (
		<form onSubmit={handleFormSubmit} className="mb-2">
			<Input
				type="text"
				placeholder="Please enter a message"
				autoComplete="off"
				error={errors.message?.message}
				{...register('message')}
			/>
			<div className="mt-2.5 flex justify-between">
				<ActionList>
					<ActionList.Item label="Send emoji" icon={<AiOutlineMeh />} />
					<ActionList.Item label="Send image" icon={<AiOutlineFileImage />} />
				</ActionList>
				<ActionList>
					<ActionList.Item
						type="submit"
						label="Send message"
						icon={<AiOutlineSend />}
					/>
				</ActionList>
			</div>
		</form>
	);
};
