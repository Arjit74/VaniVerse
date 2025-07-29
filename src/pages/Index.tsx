import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Sparkles, Users, Globe } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import RecordingButton from "@/components/RecordingButton";
import TranslationCard from "@/components/TranslationCard";
import MandalaPattern from "@/components/MandalaPattern";

const Index = () => {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranscription = (text: string) => {
    setOriginalText(text);
    // Simulate translation
    const translations: Record<string, string> = {
      "Sample transcription: नमस्ते, आप कैसे हैं?": "Hello, how are you?",
    };
    setTranslatedText(translations[text] || "Translation will appear here...");
  };

  const swapLanguages = () => {
    const temp = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-cultural relative overflow-hidden">
      {/* Background Mandala Patterns */}
      <MandalaPattern className="absolute top-10 left-10 opacity-5" size={300} />
      <MandalaPattern className="absolute bottom-10 right-10 opacity-5" size={250} />
      <MandalaPattern className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-3" size={400} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/45f8bfa4-6045-473c-a98a-4e54234031f2.png" 
              alt="VaniVerse Logo" 
              className="w-20 h-20 animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-mandala bg-clip-text text-transparent mb-3">
            VaniVerse
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Connecting Dialects Across Bharat
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
            Preserve and empower India's rich dialect heritage with real-time AI translation. 
            Speak in Awadhi, Bhojpuri, Haryanvi, and more—hear back in any language.
          </p>
        </div>

        {/* Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-4 text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">AI-Powered</h3>
              <p className="text-xs text-muted-foreground">Advanced dialect recognition</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Cultural Bridge</h3>
              <p className="text-xs text-muted-foreground">Connecting communities</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-4 text-center">
              <Globe className="w-8 h-8 text-cultural-green mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Real-Time</h3>
              <p className="text-xs text-muted-foreground">Instant translations</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Translation Interface */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-mandala mb-6">
          <CardContent className="p-6">
            {/* Language Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <LanguageSelector
                value={fromLanguage}
                onValueChange={setFromLanguage}
                placeholder="Select speaking language"
                type="input"
              />
              
              <div className="flex items-end">
                <LanguageSelector
                  value={toLanguage}
                  onValueChange={setToLanguage}
                  placeholder="Select target language"
                  type="output"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={swapLanguages}
                  disabled={!fromLanguage || !toLanguage}
                  className="ml-2 mb-2 hover:bg-primary/10"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Recording Interface */}
            <div className="flex justify-center mb-6">
              <RecordingButton
                onRecordingStateChange={setIsRecording}
                onTranscription={handleTranscription}
                disabled={!fromLanguage || !toLanguage}
              />
            </div>

            {/* Instructions */}
            {!fromLanguage || !toLanguage ? (
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Please select both source and target languages to start</p>
              </div>
            ) : !originalText ? (
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Tap the record button and speak in {fromLanguage}</p>
                <p className="text-xs mt-1">Your speech will be translated to {toLanguage}</p>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Translation Results */}
        <TranslationCard
          originalText={originalText}
          translatedText={translatedText}
          fromLanguage={fromLanguage}
          toLanguage={toLanguage}
        />

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Built with ❤️ for India's linguistic diversity</p>
          <p className="text-xs mt-1">Open source • Privacy-first • Cultural preservation</p>
        </div>
      </div>
    </div>
  );
};

export default Index;