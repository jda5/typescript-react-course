import { CourseGoalData } from "./models/course.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalsList.tsx";

export default function App() {
	const [goals, setGoals] = useState<CourseGoalData[]>([]);

	function handleAddGoal() {
		setGoals((prevGoals) => {
			const newGoal: CourseGoalData = {
				id: Math.random(),
				title: "Learn React + TS",
				description: "Learn it in depth!",
			};
			return [...prevGoals, newGoal];
		});
	}

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>Your Course Goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<CourseGoalList goals={goals}></CourseGoalList>
		</main>
	);
}
