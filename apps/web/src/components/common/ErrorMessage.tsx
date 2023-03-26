type ErrorMessageProps = Readonly<{
	error?: string;
}>;

export const ErrorMessage = ({ error }: ErrorMessageProps) =>
	error ? (
		<p role="alert" className="text-sm text-red-600">
			{error}
		</p>
	) : null;
