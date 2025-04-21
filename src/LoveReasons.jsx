import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  "Because you always know how to make me smile.",
  "Because your hugs feel like home.",
  "Because even your silence is comforting.",
  "Because you believe in me even when I doubt myself.",
  "Because you laugh at my worst jokes.",
  "Because you remember the little things.",
  "Because you make ordinary days feel special.",
  "Because your eyes light up when you talk about what you love.",
  "Because you give the best advice.",
  "Because you never give up on us.",
  "Because you taught me to love myself.",
  "Because you made me feel things I never thought I would.",
  "Because you showed me it's okay to be lazy sometimes.",
  "Because you taught me what love really is.",
  "Because you gave me strength.",
  "Because you showed me that starting over doesn't have to be scary.",
  "Because you showed me I can sound beautiful, even if I think I can't sing.",
  "Because you taught me how to be brave.",
  "Because you showed me that fighting can also be a language of love.",
  "Because you make me feel safe.",
  "Because you understand me without words.",
  "Because you listen, even when I'm not making sense.",
  "Because you challenge me to grow.",
  "Because you support my dreams.",
  "Because your smile makes everything better.",
  "Because you remember what matters to me.",
  "Because you know when I need a hug.",
  "Because you let me be myself.",
  "Because we laugh at the same silly things.",
  "Because even silence feels special with you.",
  "Because you believe in love like I do.",
  "Because you trust me.",
  "Because you are patient when I need time.",
  "Because your voice soothes me.",
  "Because you’ve seen me at my worst and still stayed.",
  "Because you inspire me to be better.",
  "Because you celebrate even my small wins.",
  "Because you make plans with me for the future.",
  "Because you look at me like I matter.",
  "Because you bring out the best in me.",
  "Because I can be completely honest with you.",
  "Because you know how to calm my worries.",
  "Because you give meaning to my days.",
  "Because I love your passion.",
  "Because you are always honest with me.",
  "Because your kindness is contagious.",
  "Because you take care of me.",
  "Because we dream together.",
  "Because you are my home.",
  "Because you are my person."
];

export default function LoveReasons() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const nextReason = () => {
    setIndex((prev) => (prev + 1) % reasons.length);
    if (!hasPlayed && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setHasPlayed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-pink-50 text-center relative">
      <audio ref={audioRef} loop>
        <source src="/those-eyes.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1 className="text-3xl font-bold mb-6 text-rose-600">
        Happy Birthday Jurgen! 🎉
      </h1>
      <Card className="max-w-xl w-full shadow-xl bg-white">
        <CardContent className="p-6 text-lg font-medium">
          <p className="mb-4">❤️ {reasons[index]}</p>
          <Button onClick={nextReason}>Next Reason</Button>
        </CardContent>
      </Card>
    </div>
  );
}

