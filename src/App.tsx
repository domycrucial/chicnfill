import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from './components/ui/ToastContainer';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { AtAGlanceSection } from './components/menu/AtAGlanceSection';
import { MenuSection } from './components/menu/MenuSection';
import { KisiniaSpecialSection } from './components/menu/KisiniaSpecialSection';
import { GallerySection } from './components/gallery/GallerySection';
import { AboutSection } from './components/about/AboutSection';
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

      {/* Main Content Sections - Streamlined & Anti-Fatigue */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <AtAGlanceSection />
        <MenuSection />
        <KisiniaSpecialSection />
        <GallerySection />
        <AboutSection />
        <ReviewsSection />
        <LocationSection />
        <SocialSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
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
