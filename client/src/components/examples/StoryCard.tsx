import StoryCard from '../StoryCard';
import storyImage from '@assets/generated_images/Pattachitra_traditional_folk_painting_1b17fc74.png';

export default function StoryCardExample() {
  return (
    <div className="p-8 bg-background">
      <StoryCard
        title="Pattachitra of Odisha"
        subtitle="Painting the Divine on Cloth"
        description="Journey through the ancient art of Pattachitra, where master painters create mythological tales through vibrant colors and intricate patterns. Each stroke carries centuries of tradition, telling stories of gods, kings, and the eternal dance of life."
        image={storyImage}
        region="Odisha, India"
        onClick={() => console.log('Story clicked')}
      />
    </div>
  );
}
