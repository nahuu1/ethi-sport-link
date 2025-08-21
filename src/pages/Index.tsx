import { useState } from "react";
import { CourtSelector } from "@/components/CourtSelector";
import { BookingForm } from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-courts.jpg";

const Index = () => {
  const [selectedCourt, setSelectedCourt] = useState<string | null>(null);

  // Mock data - in real app this would come from Supabase
  const courts = [
    {
      id: "soccer-1",
      name: "Main Soccer Field",
      sport: "soccer" as const,
      capacity: 22,
      available: true,
      bookedSlots: 8
    },
    {
      id: "basketball-1", 
      name: "Indoor Basketball Court",
      sport: "basketball" as const,
      capacity: 10,
      available: true,
      bookedSlots: 0
    },
    {
      id: "soccer-2",
      name: "Training Ground",
      sport: "soccer" as const,
      capacity: 14,
      available: false,
      bookedSlots: 14
    },
    {
      id: "basketball-2",
      name: "Outdoor Basketball Court",
      sport: "basketball" as const,
      capacity: 10,
      available: true,
      bookedSlots: 6
    }
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
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            🇪🇹 Made in Ethiopia
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-glow to-secondary bg-clip-text text-transparent">
            EUSA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Book Soccer & Basketball Courts in Ethiopia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground shadow-sport hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now ⚽
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              View Courts 🏀
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose EUSA?
            </h2>
            <p className="text-muted-foreground text-lg">
              The easiest way to book sports courts in Ethiopia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Real-time Booking</h3>
              <p className="text-muted-foreground">
                See available slots instantly. No more double bookings or confusion.
              </p>
            </div>
            
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Group & Individual</h3>
              <p className="text-muted-foreground">
                Book entire courts for your team or join individual slots with others.
              </p>
            </div>
            
            <div className="court-card text-center p-8">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Mobile Friendly</h3>
              <p className="text-muted-foreground">
                Book on-the-go with our responsive mobile-optimized interface.
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
              Book Your Court
            </h2>
            <p className="text-muted-foreground text-lg">
              Select your preferred court and time slot
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
              Connecting Ethiopian sports enthusiasts with premium courts
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 EUSA. Made with ❤️ in Ethiopia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;