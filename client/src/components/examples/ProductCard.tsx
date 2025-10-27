import ProductCard from '../ProductCard';
import productImage from '@assets/generated_images/Traditional_handcrafted_pottery_vase_ba2d7061.png';

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProductCard
        name="Handcrafted Terracotta Vase"
        price={2800}
        artisan="Rajesh Kumar"
        image={productImage}
        category="Pottery"
        onClick={() => console.log('Product clicked')}
      />
    </div>
  );
}
