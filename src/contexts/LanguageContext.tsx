import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface Translations {
  en: Record<string, string>;
  am: Record<string, string>;
}

const translations: Translations = {
  en: {
    // Navigation
    'madeInEthiopia': '🇪🇹 Made in Ethiopia',
    'bookNow': 'Book Now ⚽',
    'viewCourts': 'View Courts 🏀',
    
    // Hero
    'heroSubtitle': 'Book Soccer & Basketball Courts in Ethiopia',
    
    // Features
    'whyChooseEUSA': 'Why Choose EUSA?',
    'easiestWay': 'The easiest way to book sports courts in Ethiopia',
    'realTimeBooking': 'Real-time Booking',
    'realTimeDesc': 'See available slots instantly. No more double bookings or confusion.',
    'groupIndividual': 'Group & Individual',
    'groupDesc': 'Book entire courts for your team or join individual slots with others.',
    'mobileFriendly': 'Mobile Friendly',
    'mobileDesc': 'Book on-the-go with our responsive mobile-optimized interface.',
    
    // Booking
    'bookYourCourt': 'Book Your Court',
    'selectPreferred': 'Select your preferred court and time slot',
    'selectCourt': 'Select Court',
    'selectCourtFirst': 'Select a Court First',
    'chooseCourtAbove': 'Choose a court above to start your booking',
    'bookYourSlot': 'Book Your Slot',
    'fillDetails': 'Fill in your details to complete the booking',
    
    // Form
    'fullName': 'Full Name',
    'phoneNumber': 'Phone Number',
    'emailAddress': 'Email Address',
    'bookingType': 'Booking Type',
    'group': 'Group',
    'individual': 'Individual',
    'fullCourtBooking': 'Full court booking',
    'joinOthers': 'Join others (per person)',
    'date': 'Date',
    'timeSlot': 'Time Slot',
    'completeBooking': 'Complete Booking 🎯',
    
    // Court
    'capacity': 'Capacity',
    'players': 'players',
    'availableSpots': 'Available spots',
    'remaining': 'remaining',
    'fullyBooked': 'Fully Booked',
    'selected': 'Selected',
    'selectCourtBtn': 'Select Court',
    
    // Footer
    'connectingEthiopian': 'Connecting Ethiopian sports enthusiasts with premium courts',
    'copyright': '© 2024 EUSA. Made with ❤️ in Ethiopia.',
    
    // Sports
    'soccer': 'Soccer',
    'basketball': 'Basketball'
  },
  am: {
    // Navigation
    'madeInEthiopia': '🇪🇹 በኢትዮጵያ የተሠራ',
    'bookNow': 'አሁን ይመዝገቡ ⚽',
    'viewCourts': 'ሜዳዎችን ይመልከቱ 🏀',
    
    // Hero
    'heroSubtitle': 'በኢትዮጵያ የእግር ኳስ እና የቅርጫት ኳስ ሜዳዎችን ይመዝገቡ',
    
    // Features
    'whyChooseEUSA': 'ለምን EUSA ን ይምረጡ?',
    'easiestWay': 'በኢትዮጵያ የስፖርት ሜዳዎችን ለማስመዝገብ ቀላሉ መንገድ',
    'realTimeBooking': 'ቀጥተኛ ምዝገባ',
    'realTimeDesc': 'ያለ ምንም መጠበቅ ክፍት ሰዓቶችን ይመልከቱ። ድጋሚ ምዝገባ አይኖርም።',
    'groupIndividual': 'ቡድንና ግለሰብ',
    'groupDesc': 'ለቡድንዎ ሙሉ ሜዳ ይመዝገቡ ወይም ከሌሎች ጋር ተጠቃሽ ይሁኑ።',
    'mobileFriendly': 'ለሞባይል ተስማሚ',
    'mobileDesc': 'በመንገድ ላይ በሞባይልዎ በቀላሉ ይመዝገቡ።',
    
    // Booking
    'bookYourCourt': 'ሜዳዎን ይመዝገቡ',
    'selectPreferred': 'የሚፈልጉትን ሜዳና ሰዓት ይምረጡ',
    'selectCourt': 'ሜዳ ይምረጡ',
    'selectCourtFirst': 'መጀመሪያ ሜዳ ይምረጡ',
    'chooseCourtAbove': 'ምዝገባ ለመጀመር ከላይ ሜዳ ይምረጡ',
    'bookYourSlot': 'ቦታዎን ይመዝገቡ',
    'fillDetails': 'ምዝገባውን ለመጨረስ መረጃዎን ይሙሉ',
    
    // Form
    'fullName': 'ሙሉ ስም',
    'phoneNumber': 'ስልክ ቁጥር',
    'emailAddress': 'ኢሜይል አድራሻ',
    'bookingType': 'የምዝገባ አይነት',
    'group': 'ቡድን',
    'individual': 'ግለሰብ',
    'fullCourtBooking': 'ሙሉ ሜዳ ምዝገባ',
    'joinOthers': 'ከሌሎች ጋር ተጠቃሽነት',
    'date': 'ቀን',
    'timeSlot': 'የሰዓት ክፍል',
    'completeBooking': 'ምዝገባውን አጠናቅቅ 🎯',
    
    // Court
    'capacity': 'አቅም',
    'players': 'ተጫዋቾች',
    'availableSpots': 'ክፍት ቦታዎች',
    'remaining': 'ቀሪ',
    'fullyBooked': 'ሙሉ በሙሉ ተይዟል',
    'selected': 'ተመርጧል',
    'selectCourtBtn': 'ሜዳ ይምረጡ',
    
    // Footer
    'connectingEthiopian': 'የኢትዮጵያ ስፖርት ወዳጆችን ከተሻሉ ሜዳዎች ጋር በማገናኘት',
    'copyright': '© 2024 EUSA. በኢትዮጵያ በፍቅር የተሠራ ❤️።',
    
    // Sports
    'soccer': 'እግር ኳስ',
    'basketball': 'ቅርጫት ኳስ'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};