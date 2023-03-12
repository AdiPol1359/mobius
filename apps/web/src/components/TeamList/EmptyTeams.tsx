import Empty from '#/empty.svg';

export const EmptyTeams = () => (
	<div className="my-auto flex flex-col items-center">
		<Empty width={600} height={500} />
		<h2 className="mt-4 text-2xl font-medium">
			You haven&apos;t joined any team yet!
		</h2>
	</div>
);
