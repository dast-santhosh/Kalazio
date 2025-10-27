import Navigation from "@/components/Navigation";
import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import ArtisanCard from "@/components/ArtisanCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import artisanImage from "@assets/generated_images/Artisan_weaving_traditional_handloom_4a3c8953.png";
import productImage from "@assets/generated_images/Traditional_handcrafted_pottery_vase_ba2d7061.png";
import paintingImage from "@assets/generated_images/Pattachitra_traditional_folk_painting_1b17fc74.png";

export default function Marketplace() {
  // Mock data - todo: remove mock functionality
  const products = [
    {
      name: "Handcrafted Terracotta Vase",
      price: 2800,
      artisan: "Rajesh Kumar",
      image: productImage,
      category: "Pottery"
    },
    {
      name: "Chettinad Cotton Saree",
      price: 8500,
      artisan: "Meera Devi",
      image: artisanImage,
      category: "Handloom"
    },
    {
      name: "Traditional Pattachitra Painting",
      price: 15000,
      artisan: "Priya Mohanty",
      image: paintingImage,
      category: "Painting"
    },
    {
      name: "Blue Pottery Bowl Set",
      price: 4200,
      artisan: "Arun Sharma",
      image: productImage,
      category: "Pottery"
    },
    {
      name: "Silk Bandhani Dupatta",
      price: 6800,
      artisan: "Kavita Patel",
      image: artisanImage,
      category: "Textiles"
    },
    {
      name: "Madhubani Wall Art",
      price: 12000,
      artisan: "Sunita Devi",
      image: paintingImage,
      category: "Painting"
    }
  ];

  const artisans = [
    {
      name: "Meera Devi",
      region: "Tamil Nadu",
      craft: "Handloom Weaving",
      image: artisanImage,
      specialty: "Master weaver preserving 200-year-old Chettinad cotton techniques."
    },
    {
      name: "Rajesh Kumar",
      region: "Rajasthan",
      craft: "Pottery",
      image: productImage,
      specialty: "Third-generation potter crafting traditional terracotta pieces."
    },
    {
      name: "Priya Mohanty",
      region: "Odisha",
      craft: "Pattachitra",
      image: paintingImage,
      specialty: "Award-winning artist painting mythological tales on cloth."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <div className="bg-gradient-to-b from-[#6C2A84]/10 to-background py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Crafts of India
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover authentic handcrafted treasures from across India. 
              Every purchase supports artisan communities and preserves cultural heritage.
            </p>
          </div>
        </div>

        <FilterBar />

        <section className="py-12" data-testid="section-marketplace-content">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="products" data-testid="tab-products">Products</TabsTrigger>
                <TabsTrigger value="artisans" data-testid="tab-artisans">Artisans</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                    <ProductCard
                      key={product.name}
                      {...product}
                      onClick={() => console.log(`Product clicked: ${product.name}`)}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="artisans">
                <div className="grid md:grid-cols-3 gap-8">
                  {artisans.map((artisan) => (
                    <ArtisanCard
                      key={artisan.name}
                      {...artisan}
                      onClick={() => console.log(`Artisan clicked: ${artisan.name}`)}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
