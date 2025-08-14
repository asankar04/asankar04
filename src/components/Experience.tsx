import RunwayCard from './RunwayCard';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 space-y-4">
      <h1 className="text-4xl font-bold">Experience</h1>
      <RunwayCard
        title="Lead Software Engineer"
        company="ProxyLink"
        duration="2024-Present"
      />
    </div>
  );
}
