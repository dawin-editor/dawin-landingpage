import { cn } from "@/lib/utils";

const NewVwesion = ({
  showStrip,
  setShowStrip,
}: {
  showStrip: boolean;
  setShowStrip: (showStrip: boolean) => void;
}) => {
  return (
    <div
      className={cn(
        " bg-red-300 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 z-1000",
        {
          hidden: !showStrip,
        }
      )}
    >
      الآن <span className="font-bold">دوّن</span> بحلة جديدة، شاركنا رأيك
      <button
        onClick={() => setShowStrip(false)}
        className="ml-3 text-xs underline hover:text-red-700"
      >
        إخفاء
      </button>
    </div>
  );
};

export default NewVwesion;
