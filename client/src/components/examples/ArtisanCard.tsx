import ArtisanCard from '../ArtisanCard';
import artisanImage from '@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png';

export default function ArtisanCardExample() {
  return (
    <div className="p-8 bg-background">
      <ArtisanCard
        name="Meera Devi"
        region="Tamil Nadu"
        craft="Handloom Weaving"
        image={artisanImage}
        specialty="Master weaver preserving 200-year-old Chettinad cotton techniques, creating intricate patterns that tell stories of heritage."
        onClick={() => console.log('Artisan card clicked')}
      />
    </div>
  );
}
