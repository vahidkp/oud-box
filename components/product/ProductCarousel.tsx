import { Carousel } from '@/components/ui/Carousel';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';

/**
 * Product-card carousel — used for Best Sellers & Related Products. Slide widths match
 * ProductGrid's columns at every breakpoint (2 / 3 / 5 across, given the carousel's
 * 1.25rem gap) so carousels and grids show identical card sizes.
 */
export function ProductCarousel({ products }: { products: Product[] }) {
  return (
    <Carousel
      slideClassName="basis-[calc(50%_-_0.625rem)] sm:basis-[calc(33.333%_-_0.84rem)] lg:basis-[calc(20%_-_1rem)]"
      showArrows={false}
      showDots
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}
