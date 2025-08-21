import { useState } from "react";
import { CourtSelector } from "@/components/CourtSelector";
import { BookingForm } from "@/components/BookingForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-courts.jpg";

const Index = () => {
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null);
  const { t } = useLanguage();

  // Courts will be loaded from Supabase - no mock data
  const courts = [
    // Example structure - remove when connected to database
    // {
    //   id: "soccer-1",
    //   name: "Main Soccer Field", 
    //   sport: "soccer" as const,
    //   capacity: 22,
    //   available: true,
    //   bookedSlots: 0
    // },
    // {
    //   id: "basketball-1",
    //   name: "Basketball Court",
    //   sport: "basketball" as const, 
    //   capacity: 10,
    //   available: true,
    //   bookedSlots: 0
    // }
  ];

  const handleBookingComplete = () => {
    setSelectedCourt(null);
    // Could add more success handling here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-4 right-4 z-20">
          <LanguageSwitcher />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            {t('madeInEthiopia')}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-secondary bg-clip-text text-transparent">
            EUSA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground shadow-sport hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('bookNow')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              {t('viewCourts')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t('whyChooseEUSA')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('easiestWay')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">{t('realTimeBooking')}</h3>
              <p className="text-muted-foreground">
                {t('realTimeDesc')}
              </p>
            </div>
            
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">{t('groupIndividual')}</h3>
              <p className="text-muted-foreground">
                {t('groupDesc')}
              </p>
            </div>
            
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">{t('mobileFriendly')}</h3>
              <p className="text-muted-foreground">
                {t('mobileDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {t('bookYourCourt')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('selectPreferred')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CourtSelector 
              courts={courts}
              selectedCourt={selectedCourt}
              onCourtSelect={setSelectedCourt}
            />
            <BookingForm 
              selectedCourt={selectedCourt}
              onBookingComplete={handleBookingComplete}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EUSA
            </h3>
            <p className="text-muted-foreground">
              {t('connectingEthiopian')}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;