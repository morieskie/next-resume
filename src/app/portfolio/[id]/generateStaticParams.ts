import projects from "@/assets/data/portfolio.json";
type Params = {
  id: string | number;
};
export default async function generateStaticParams(): Promise<Params[]> {
  // Here, you should fetch or generate the list of ids
  // that you want to statically generate pages for.
  // For example, let's say you have a list of portfolio items
  // that you want to generate pages for.
  // const portfolioItems = [
  //   { id: 'item-1' },
  //   { id: 'item-2' },
  //   // Add more items as needed
  // ];

  return projects.map((item) => ({ id: item.id }));
}
