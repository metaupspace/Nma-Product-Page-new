import { CaseStudy } from "@/types/strapi/caseStudy";
import LinkButton from "../buttons/LinkButton";
import { format } from "date-fns/format";
import Clarity from "@microsoft/clarity";

const handleClick = () => {
  if (typeof window !== "undefined" && Clarity) {
    Clarity.event(`card_click_case_study`);
  }
};

// Card Components
const CaseStudyCard = ({ resource }: { resource: CaseStudy }) => (
  <div className="bg-blue-vertical p-[2px] rounded-md">
    <div className="overflow-hidden transition-shadow duration-200 bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-900 dark:border-gray-700 hover:shadow-md">
      <div className="p-4 space-y-3">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {format(new Date(resource.releaseDate), "MMM dd, yyyy")}
        </div>
        <h4 className="text-base font-medium leading-tight lg:text-lg">
          {resource.title}
        </h4>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {resource.description}
        </p>
        <div onClick={handleClick} className="pt-2">
          <LinkButton href="#">Read More</LinkButton>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyCard;
