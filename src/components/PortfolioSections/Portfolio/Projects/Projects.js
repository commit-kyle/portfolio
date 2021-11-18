import Project from './Project/Project';

import specialtea from '../../../../Assets/Images/Projects/specialtea.png';
import starwars from '../../../../Assets/Images/Projects/starwars.png';
import users from '../../../../Assets/Images/Projects/users.png';
import expense from '../../../../Assets/Images/Projects/expense.png';
import blog from '../../../../Assets/Images/Projects/blog.png';

import classes from './Projects.module.css';

const Projects = () => {
	let projectData = [
		{
			title: 'SpecialTea',
			url: 'https://commit-kyle.github.io/specialtea/',
			src: specialtea,
			alt: '',
		},
		{
			title: 'Star Wars Movies',
			url: 'https://commit-kyle.github.io/Star-Wars--movies-list/',
			src: starwars,
			alt: '',
		},
		{
			title: 'Users App',
			url: 'https://commit-kyle.github.io/users-app/',
			src: users,
			alt: '',
		},
		{
			title: 'Expense Tracker',
			url: 'https://commit-kyle.github.io/expense-tracker/',
			src: expense,
			alt: '',
		},
		{
			title: 'Latin Blog',
			url: 'https://commit-kyle.github.io/latin_blog/ ',
			src: blog,
			alt: '',
		},
	];

	return (
		<div className={classes.Container}>
			{projectData.map((project, i) => (
				<Project title={project.title} url={project.url} src={project.src}/>
			))}
		</div>
	);
};

export default Projects;
