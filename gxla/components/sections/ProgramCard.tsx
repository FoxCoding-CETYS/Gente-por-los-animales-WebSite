interface ProgramaCardProps {
  title: string;
  subtitle: string;
  description: string;
  contentList: string[];
  highlightText: string;
  color?: "yellow" | "blue";
}

export default function ProgramaCard({
  title,
  subtitle,
  description,
  contentList,
  highlightText,
  color = "yellow",
}: ProgramaCardProps) {
  const borderColor =
    color === "yellow" ? "border-yellow-300" : "border-blue-300";
  const bgHighlight =
    color === "yellow" ? "bg-yellow-200" : "bg-blue-200";

  return (
    <div
      className={`border ${borderColor} rounded-xl p-6 shadow-sm flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {contentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div
        className={`${bgHighlight} mt-4 text-center py-2 rounded-md font-medium`}
      >
        {highlightText}
      </div>
    </div>
  );
}
