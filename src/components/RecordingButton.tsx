import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Square } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RecordingButtonProps {
  onRecordingStateChange: (isRecording: boolean) => void;
  onTranscription: (text: string) => void;
  disabled?: boolean;
}

const RecordingButton = ({ onRecordingStateChange, onTranscription, disabled }: RecordingButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleRecording = async () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      setIsProcessing(true);
      onRecordingStateChange(false);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        onTranscription("Sample transcription: नमस्ते, आप कैसे हैं?");
        toast({
          title: "Translation Complete",
          description: "Your speech has been successfully translated!",
        });
      }, 2000);
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsRecording(true);
        onRecordingStateChange(true);
        toast({
          title: "Recording Started",
          description: "Speak now to translate your message",
        });
        
        // Cleanup stream (in real app, you'd save this reference)
        stream.getTracks().forEach(track => track.stop());
      } catch (error) {
        toast({
          title: "Microphone Access Denied",
          description: "Please allow microphone access to use voice translation",
          variant: "destructive",
        });
      }
    }
  };

  const getButtonContent = () => {
    if (isProcessing) {
      return (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Processing...</span>
        </>
      );
    }

    if (isRecording) {
      return (
        <>
          <Square className="w-5 h-5" />
          <span>Stop Recording</span>
        </>
      );
    }

    return (
      <>
        <Mic className="w-5 h-5" />
        <span>Start Recording</span>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button
        variant={isRecording ? "destructive" : "record"}
        size="lg"
        onClick={handleRecording}
        disabled={disabled || isProcessing}
        className={`w-32 h-32 rounded-full text-lg font-semibold ${
          isRecording ? "animate-recording-pulse" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          {getButtonContent()}
        </div>
      </Button>
      
      {isRecording && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <span>Recording...</span>
        </div>
      )}
    </div>
  );
};

export default RecordingButton;