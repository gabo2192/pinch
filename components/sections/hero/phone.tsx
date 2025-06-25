export default function Phone() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-3xl border-8 border-black shadow-2xl bg-white overflow-hidden transform rotate-6 mb-12 md:mb-0 animate-fade-up hover:animate-wiggle">
      {/* WhatsApp header */}
      <div className="bg-[#075e54] text-white px-4 py-3 text-sm font-semibold">
        PinchPay Support
      </div>

      {/* Screen */}
      <div className="absolute inset-x-0 bottom-0 top-[3rem] bg-[#e5ddd5] p-4 flex flex-col gap-2 text-sm text-gray-900 overflow-y-auto">
        <div className="self-start bg-white rounded-xl p-3 shadow">
          👋 Hi Maria! You’re approved for early access this month.
        </div>
        <div className="self-end bg-green-100 rounded-xl p-3 shadow">
          Thank you! When will the funds arrive?
        </div>
        <div className="self-start bg-white rounded-xl p-3 shadow">
          Your funds will arrive today. You can also track them here. ✅
        </div>
        <div className="self-end bg-green-100 rounded-xl p-3 shadow">
          Awesome! 🙏
        </div>
      </div>
    </div>
  );
}
