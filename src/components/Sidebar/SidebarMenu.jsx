import MenuSection from './MenuSection';
import CTAButtons from './CTAButtons';

const SidebarMenu = ({ sections }) => {
  return (
    <div className="flex flex-col">
      {sections.map((section) => {
        if (section.type === 'cta-group') {
          return <CTAButtons key="cta-group" ctas={section.ctas} />;
        }
        return <MenuSection key={section.title} section={section} />;
      })}
    </div>
  );
};

export default SidebarMenu;