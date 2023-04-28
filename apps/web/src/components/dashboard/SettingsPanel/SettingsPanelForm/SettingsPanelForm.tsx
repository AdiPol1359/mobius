import { toast } from 'react-hot-toast';

import { useSettingsPanelForm } from './useSettingsPanelForm';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';

import type { Team } from '@/types';

type SettingsPanelFormProps = Readonly<{
	team: Team;
}>;

export const SettingsPanelForm = ({
	team: { name },
}: SettingsPanelFormProps) => {
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors, dirtyFields, isDirty },
	} = useSettingsPanelForm({
		name,
		onSuccess: () => {
			toast.success('The team has been successfully updated!');
		},
	});

	console.log(isDirty);

	return (
		<form onSubmit={handleFormSubmit} className="space-y-2.5">
			<Input
				label="Team name"
				type="text"
				placeholder="Enter the team name"
				error={errors.name?.message}
				{...register('name')}
			/>
			<Button
				type="submit"
				variant="primary"
				disabled={isLoading || !dirtyFields.name}
				fullWidth
			>
				Update the team
			</Button>
		</form>
	);
};
