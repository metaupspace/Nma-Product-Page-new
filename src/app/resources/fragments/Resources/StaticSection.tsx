import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Clarity from "@microsoft/clarity";
export interface StaticSectionProps {
  id: number;
  title: string;
  description: string;
  href: string;
}

const handleClick = (title: string) => {
  if (typeof window !== "undefined" && Clarity) {
    Clarity.event(`static_section_card_click_${title}`);
  }
};

const StaticCard = ({ item }: { item: StaticSectionProps }) => (
  <div className="p-6 text-white transition-colors duration-200 rounded-lg bg-brand-blue">
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm leading-relaxed text-blue-100">
          {item.description}
        </p>
      </div>
      <div className="pt-2">
        <Link
          onClick={() => handleClick(item.title)}
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group"
        >
          Visit {item.title}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </div>
);

const StaticSections = ({ items }: { items: StaticSectionProps[] }) => {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((item) => (
        <StaticCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StaticSections;
