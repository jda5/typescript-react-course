import { FC, type PropsWithChildren, type ReactNode } from "react";

/**
 *
 * 1) You can define props with an interface or a type alias.
 *
 * The commented-out interface below is another valid approach:
 *
 * interface CourseGoalProps {
 *   title: string;
 *   children: ReactNode;
 * }
 *
 * It describes the exact shape of the props.
 */

// Uncommenting and using an interface is also common:
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

/**
 *
 * 2) PropsWithChildren<{ title: string }>
 *
 * - 'PropsWithChildren' is a utility type from React that takes an object of props
 *   and automatically includes the 'children' prop.
 * - Here, we combine it with a custom prop 'title: string'.
 * - This means our component automatically accepts 'title' + React's 'children'.
 *
 */
type CourseGoalProps = PropsWithChildren<{ title: string }>;

/**
 *
 * 3) We export a default functional component called 'CourseGoal'.
 *
 * - Destructuring 'title' and 'children' directly from the props object (CourseGoalProps).
 * - The function returns some JSX for rendering an article section on the screen.
 *
 */
export default function CourseGoal({ title, children }: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				<p>{children}</p>
			</div>
			<button>Delete</button>
		</article>
	);
}

/**
 *
 * ALTERNATIVE: Using React's 'FC' (Function Component) type
 *
 * - FC<CourseGoalProps> automatically infers props + children.
 * - Some developers prefer 'FC' for clarity.
 *
 * const CourseGoal: FC<CourseGoalProps> = ({ title, children }: CourseGoalProps) => {
 *   return (
 *     <article>
 *       <div>
 *         <h2>{title}</h2>
 *         <p>{children}</p>
 *       </div>
 *       <button>Delete</button>
 *     </article>
 *   );
 * };
 *
 * export default CourseGoal;
 */
