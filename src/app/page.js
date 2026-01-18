import Banner from "@/components/Banner";
import ProductsPage from "./products/page";
import FeaturedCategories from "@/components/FeaturedCategories";
import DiscountedBanner from "@/components/DiscountedBaner";
import Features from "@/components/Features";
import NewsletterSection from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductsPage />
      <FeaturedCategories />
      <DiscountedBanner />
      <Features />
      <NewsletterSection />
    </div>
  );
}
