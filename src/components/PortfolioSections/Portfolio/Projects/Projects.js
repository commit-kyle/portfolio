import Project from './Project/Project';

import classes from './Projects.module.css';

const Projects = () => {
	let projectData = [
		{
			title: 'SpecialTea',
			url: 'https://commit-kyle.github.io/specialtea/',
		},
		{
			title: 'Star Wars Movies List',
			url: 'https://commit-kyle.github.io/Star-Wars--movies-list/',
		},
		{
			title: 'Users App',
			url: 'https://commit-kyle.github.io/users-app/',
		},
		{
			title: 'Expense Tracker',
			url: 'https://commit-kyle.github.io/expense-tracker/',
		},
		{
			title: 'Latin Blog',
			url: 'https://commit-kyle.github.io/latin_blog/ ',
		},
	];

	return (
		<div className={classes.Container}>
			{projectData.map(project => (
				<Project title={project.title} url={project.url} />
			))}
		</div>
	);
};

export default Projects;
