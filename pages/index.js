import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import SkillSection from '../components/projects/SkillSection';
import Button from '../components/reusable/Button';
import AppBanner from '../components/shared/AppBanner';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
	
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<AppBanner />

            <About/>

			<ProjectsGrid />

            <SkillSection/>
            <Contact/>
		</div>
	);
}
