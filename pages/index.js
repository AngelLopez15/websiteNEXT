import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Jobs from "../components/Home/Jobs";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";

export default function Home(props) {
  const {
    services,
    projects
  } = props

  return (
    <main>
      <Banner />
      <Services 
        services={ services }
      />
      <AboutUs />
      <Projects 
        projects={ projects }
      />
      <Jobs />
    </main>
  )
}

export async function getStaticProps() {
  const respServices = await fetch("http://localhost:4050/services")
  const services = await respServices.json()
  const respProjects = await fetch("http://localhost:4050/last-projects")
  const projects = await respProjects.json()

  return {
    props: {
      services,
      projects
    }
  }
}