import { settingsPanelFormSchema } from './SettingsPanelForm.schemas';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { useZodForm } from '@/hooks/useZodForm';

import type { Team } from '@/types';

type SettingsPanelFormProps = Readonly<{
	team: Team;
}>;

export const SettingsPanelForm = ({
	team: { name },
}: SettingsPanelFormProps) => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(
		settingsPanelFormSchema,
		{
			onSubmit: () => {
				console.log('update the team...');
			},
		},
		{ defaultValues: { name } }
	);

	return (
		<form onSubmit={handleFormSubmit} className="space-y-2.5">
			<Input
				label="Team name"
				type="text"
				placeholder="Enter the team name"
				error={errors.name?.message}
				{...register('name')}
			/>
			<Button type="submit" variant="primary" fullWidth>
				Update the team
			</Button>
		</form>
	);
};
