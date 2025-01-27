import PortfolioDetailComponent from "./PortfolioDetailComponent";
import projects from "@/assets/data/portfolio.json";
type Params = {
  id: string;
};
export async function generateStaticParams(): Promise<Params[]> {
  // console.log('projects', projects)
  return projects.map((item) => ({ id: item.id.toString() }));
}

const ProjectComponent = ({ emitClose }: any) => {
  return <PortfolioDetailComponent emitClose={emitClose} />;
};
export default ProjectComponent;
