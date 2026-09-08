import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from './components/ui/ToastContainer';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { FeaturedDishes } from './components/menu/FeaturedDishes';
import { PackagesSection } from './components/menu/PackagesSection';
import { MenuSection } from './components/menu/MenuSection';
import { PromotionsSection } from './components/promotions/PromotionsSection';
import { AboutSection } from './components/about/AboutSection';
import { GallerySection } from './components/gallery/GallerySection';
import { EventsOrganizedSection } from './components/events/EventsOrganizedSection';
import { ReservationSection } from './components/reservation/ReservationSection';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { LocationSection } from './components/location/LocationSection';
import { SocialSection } from './components/social/SocialSection';
import { FoodDetailModal } from './components/menu/FoodDetailModal';
import { CartDrawer } from './components/order/CartDrawer';
import { CheckoutModal } from './components/order/CheckoutModal';
import { OrderSuccessModal } from './components/order/OrderSuccessModal';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { CustomerOrderDetails } from './types';

function MainLayout() {
  const [successOrder, setSuccessOrder] = useState<{
    details: CustomerOrderDetails | null;
    orderId: string;
    isOpen: boolean;
  }>({
    details: null,
    orderId: '',
    isOpen: false,
  });

  const handleOrderSuccess = (details: CustomerOrderDetails, orderId: string) => {
    setSuccessOrder({
      details,
      orderId,
      isOpen: true,
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#111111] text-[#FFF8EE]">
      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <PackagesSection />
        <FeaturedDishes />
        <MenuSection />
        <PromotionsSection />
        <EventsOrganizedSection />
        <GallerySection />
        <ReservationSection />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
        <SocialSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Overlays & Modals */}
      <FoodDetailModal />
      <CartDrawer />
      <CheckoutModal onOrderSuccess={handleOrderSuccess} />
      <OrderSuccessModal
        isOpen={successOrder.isOpen}
        onClose={() => setSuccessOrder((prev) => ({ ...prev, isOpen: false }))}
        orderDetails={successOrder.details}
        orderId={successOrder.orderId}
      />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <MainLayout />
      </CartProvider>
    </ToastProvider>
  );
}
