import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-primary text-primary-foreground' : ''}
      >
        EN
      </Button>
      <Button
        variant={language === 'am' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('am')}
        className={language === 'am' ? 'bg-primary text-primary-foreground' : ''}
      >
        አማ
      </Button>
    </div>
  );
};