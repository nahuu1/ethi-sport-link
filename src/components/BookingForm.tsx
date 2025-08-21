import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingFormProps {
  selectedCourt: string | null;
  onBookingComplete: () => void;
}

export const BookingForm = ({ selectedCourt, onBookingComplete }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bookingType: "",
    date: "",
    timeSlot: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const timeSlots = [
    "06:00 - 07:00",
    "07:00 - 08:00", 
    "08:00 - 09:00",
    "09:00 - 10:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCourt) {
      toast({
        title: "Please select a court",
        description: "You need to select a court before booking.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.phone || !formData.email || !formData.bookingType || !formData.date || !formData.timeSlot) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to complete the booking.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send to Supabase
    toast({
      title: "Booking Successful! 🎉",
      description: `Your ${formData.bookingType} booking for ${formData.date} at ${formData.timeSlot} has been confirmed.`,
    });
    
    onBookingComplete();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!selectedCourt) {
    return (
      <Card className="booking-form">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🏟️</div>
          <h3 className="text-xl font-semibold mb-2">{t('selectCourtFirst')}</h3>
          <p className="text-muted-foreground">{t('chooseCourtAbove')}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="booking-form">
      <div className="mb-6">
        <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          {t('bookYourSlot')}
        </h3>
        <p className="text-muted-foreground">{t('fillDetails')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('fullName')} *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">{t('phoneNumber')} *</Label>
            <Input
              id="phone"
              placeholder="+251 9XX XXX XXX"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('emailAddress')} *</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>{t('bookingType')} *</Label>
          <Select value={formData.bookingType} onValueChange={(value) => handleInputChange("bookingType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select booking type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="group">
                <div className="flex items-center space-x-2">
                  <Badge variant="default" className="bg-primary">{t('group')}</Badge>
                  <span>{t('fullCourtBooking')}</span>
                </div>
              </SelectItem>
              <SelectItem value="individual">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{t('individual')}</Badge>
                  <span>{t('joinOthers')}</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">{t('date')} *</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => handleInputChange("date", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>{t('timeSlot')} *</Label>
            <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sport hover:shadow-glow transition-all duration-300"
          size="lg"
        >
          {t('completeBooking')}
        </Button>
      </form>
    </Card>
  );
};