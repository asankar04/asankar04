export default function LetterBoard({ text }: { text: string }) {
  return (
    <div className="flex space-x-0.5">
      {text.split('').map((char, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-600 px-1.5 py-1 min-w-[16px] text-center"
        >
          <span className="text-yellow-400 font-mono text-xs font-bold">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </div>
      ))}
    </div>
  );
}
