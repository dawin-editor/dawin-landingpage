import { MessageCircle } from 'lucide-react';

const FeedbackButton = () => {
  const tallyId = import.meta.env.VITE_TALLY_ID;
  return (
    <button 
      className="fixed bottom-[11px] right-[11px] bg-[#1a4d77] text-white w-12 h-12 rounded-full text-2xl flex items-center justify-center shadow-lg cursor-pointer z-[99999999]"
      data-tally-open={tallyId} 
      data-tally-emoji-text="👋" 
      data-tally-emoji-animation="wave"
      aria-label="Provide feedback"
      title="Share your feedback"
    >
      <MessageCircle className="feedback-icon" />
    </button>
  );
};

export default FeedbackButton;