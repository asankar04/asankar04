import RunwayCard from '../Custom/RunwayCard';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 space-y-4">
      <h1 className="text-4xl font-bold text-white">Experience</h1>
      <div className="flex items-center gap-4">
        <RunwayCard
          title="Lead Software Engineer"
          company="ProxyLink"
          duration="2024-Present"
        />
        <RunwayCard
          title="Software Engineer"
          company="Young Software LLC"
          duration="2024-Present"
        />
      </div>
    </div>
  );
}
