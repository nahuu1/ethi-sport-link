import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Court {
  id: string;
  name: string;
  sport: "soccer" | "basketball";
  capacity: number;
  available: boolean;
  bookedSlots: number;
}

interface CourtSelectorProps {
  courts: Court[];
  selectedCourt: string | null;
  onCourtSelect: (courtId: string) => void;
}

export const CourtSelector = ({ courts, selectedCourt, onCourtSelect }: CourtSelectorProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        Select Court
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courts.map((court) => (
          <Card
            key={court.id}
            className={`court-card cursor-pointer transition-all duration-300 ${
              selectedCourt === court.id
                ? "ring-2 ring-primary border-primary shadow-glow"
                : "hover:border-primary/50"
            } ${!court.available ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => court.available && onCourtSelect(court.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{court.name}</h3>
                <Badge
                  variant={court.sport === "soccer" ? "default" : "secondary"}
                  className={
                    court.sport === "soccer" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }
                >
                  {court.sport === "soccer" ? "⚽ Soccer" : "🏀 Basketball"}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Capacity:</span>
                  <span className="font-medium">{court.capacity} players</span>
                </div>
                
                {court.sport === "soccer" && court.bookedSlots > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Available spots:</span>
                    <span className="font-medium text-primary">
                      {court.capacity - court.bookedSlots} remaining
                    </span>
                  </div>
                )}
                
                <div className="pt-2">
                  <Button
                    variant={selectedCourt === court.id ? "default" : "outline"}
                    disabled={!court.available}
                    className={`w-full ${
                      selectedCourt === court.id
                        ? "bg-primary text-primary-foreground shadow-sport"
                        : ""
                    }`}
                  >
                    {!court.available
                      ? "Fully Booked"
                      : selectedCourt === court.id
                      ? "Selected"
                      : "Select Court"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};