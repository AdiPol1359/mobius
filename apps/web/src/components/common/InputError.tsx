type InputErrorProps = Readonly<{
	error?: string;
}>;

export const InputError = ({ error }: InputErrorProps) =>
	error ? (
		<p role="alert" className="text-sm text-red-600">
			{error}
		</p>
	) : null;
