import SectionHeader from '../SectionHeader';

export default function SectionHeaderExample() {
  return (
    <div className="p-8 bg-background">
      <SectionHeader
        eyebrow="Crafts of India"
        title="From Hand to Heart"
        description="Discover authentic handcrafted treasures created by master artisans across India, each piece telling a unique story of heritage and tradition."
        centered={true}
      />
    </div>
  );
}
