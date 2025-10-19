interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <section className="bg-yellow-100 text-center py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-700 max-w-2xl mx-auto">{description}</p>
    </section>
  );
}