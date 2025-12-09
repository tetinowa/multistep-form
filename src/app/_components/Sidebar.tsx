export default function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-500 p-8 w-1/3 text-white">
      <div className="mb-8">
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0L24.5 12.5L40 15L28 25.5L32 40L20 32L8 40L12 25.5L0 15L15.5 12.5L20 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold border-2 bg-white text-purple-600 border-white">
            1
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide opacity-80">
              Step 1
            </div>
            <div className="font-semibold">Your Info</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold border-2 bg-transparent border-white text-white">
            2
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide opacity-80">
              Step 2
            </div>
            <div className="font-semibold">Contact</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold border-2 bg-transparent border-white text-white">
            3
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide opacity-80">
              Step 3
            </div>
            <div className="font-semibold">Address</div>
          </div>
        </div>
      </div>
    </div>
  );
}
