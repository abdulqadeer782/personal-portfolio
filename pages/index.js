import PagesMetaHead from '../components/PagesMetaHead';
import Projects from '../components/Projects';
import SkillSection from '../components/SkillSection';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';

export default function Home() {
	
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />

			<HeroSection />

            <About/>

			<Projects />

            <SkillSection/>
            <Contact/>
		</div>
	);
}
