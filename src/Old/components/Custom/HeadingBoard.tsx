export default function HeadingBoard({ text }: { text: string }) {
  return (
    <div className="text-2xl font-semibold bg-yellow-400 p-1 rounded-sm">
      <span className="text-black border border-black rounded-sm px-4">
        {text}
      </span>
    </div>
  );
}
