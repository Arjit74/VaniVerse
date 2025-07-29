import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Copy, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface TranslationCardProps {
  originalText: string;
  translatedText: string;
  fromLanguage: string;
  toLanguage: string;
  audioUrl?: string;
}

const TranslationCard = ({ 
  originalText, 
  translatedText, 
  fromLanguage, 
  toLanguage, 
  audioUrl 
}: TranslationCardProps) => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Text has been copied successfully",
      });
    } catch {
      toast({
        title: "Copy failed",
        description: "Unable to copy text to clipboard",
        variant: "destructive",
      });
    }
  };

  const handlePlayAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => {
        toast({
          title: "Playback failed",
          description: "Unable to play translated audio",
          variant: "destructive",
        });
      });
    } else {
      // Simulate text-to-speech
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = toLanguage === "hindi" ? "hi-IN" : "en-US";
      speechSynthesis.speak(utterance);
    }
  };

  if (!originalText && !translatedText) {
    return (
      <Card className="w-full border-dashed border-2 border-muted-foreground/25">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <Volume2 className="w-12 h-12 text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">
            Your translations will appear here
          </p>
          <p className="text-sm text-muted-foreground/75 mt-2">
            Select languages and start recording to begin
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-gradient-cultural border border-border/50 shadow-cultural">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-center">
          Translation Result
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Original Text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {fromLanguage} (Original)
            </span>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => handleCopy(originalText)}
              className="h-8 w-8 p-0"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 bg-muted rounded-lg border">
            <p className="text-sm leading-relaxed">
              {originalText}
            </p>
          </div>
        </div>

        {/* Translated Text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground capitalize">
              {toLanguage} (Translated)
            </span>
            <div className="flex gap-1">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handlePlayAudio}
                className="h-8 w-8 p-0"
              >
                <Volume2 className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleCopy(translatedText)}
                className="h-8 w-8 p-0"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm leading-relaxed font-medium">
              {translatedText}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            variant="cultural" 
            size="sm" 
            onClick={handlePlayAudio}
            className="flex-1"
          >
            <Volume2 className="w-4 h-4" />
            Play Audio
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleCopy(translatedText)}
            className="flex-1"
          >
            <Copy className="w-4 h-4" />
            Copy Translation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TranslationCard;