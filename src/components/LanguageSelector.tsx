import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Volume2 } from "lucide-react";

interface LanguageSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  type: "input" | "output";
}

const languages = [
  { code: "awadhi", name: "अवधी (Awadhi)", flag: "🇮🇳" },
  { code: "bhojpuri", name: "भोजपुरी (Bhojpuri)", flag: "🇮🇳" },
  { code: "haryanvi", name: "हरियाणवी (Haryanvi)", flag: "🇮🇳" },
  { code: "hindi", name: "हिंदी (Hindi)", flag: "🇮🇳" },
  { code: "english", name: "English", flag: "🇺🇸" },
  { code: "punjabi", name: "ਪੰਜਾਬੀ (Punjabi)", flag: "🇮🇳" },
  { code: "gujarati", name: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
  { code: "marathi", name: "मराठी (Marathi)", flag: "🇮🇳" },
];

const LanguageSelector = ({ value, onValueChange, placeholder, type }: LanguageSelectorProps) => {
  const Icon = type === "input" ? Volume2 : Globe;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Icon className="w-4 h-4" />
        <span>{type === "input" ? "Speaking in" : "Translate to"}</span>
      </div>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-card border border-border hover:border-primary/50 transition-colors">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;