import { CourseGoalData } from "../models/course.tsx";
import CourseGoal from "./CourseGoal.tsx";

type CourseGoalListProps = {
	goals: CourseGoalData[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CourseGoal title={goal.title}>
						<p>{goal.description}</p>
					</CourseGoal>
				</li>
			))}
		</ul>
	);
}
