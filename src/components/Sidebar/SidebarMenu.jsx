import MenuSection from './MenuSection';
import CTAButtons from './CTAButtons';

const SidebarMenu = ({ sections, ctas }) => (
  <div className="flex flex-col no-scrollbar">
    {sections.map((section) => (
      <MenuSection key={section.title} section={section} />
    ))}
    <CTAButtons ctas={ctas} />
  </div>
);

export default SidebarMenu;