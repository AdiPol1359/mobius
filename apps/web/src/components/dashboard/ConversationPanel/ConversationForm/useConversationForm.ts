import { conversationFormSchema } from './ConversationForm.schemas';

import { useTeamMessages } from '@/hooks/useTeamMessages';
import { useZodForm } from '@/hooks/useZodForm';

export const useConversationForm = () => {
	const { createTeamMessageMutation } = useTeamMessages();
	const { reset, ...rest } = useZodForm(conversationFormSchema, {
		onSubmit: ({ message }) => {
			createTeamMessageMutation.mutate(message);
			reset();
		},
	});

	return rest;
};
