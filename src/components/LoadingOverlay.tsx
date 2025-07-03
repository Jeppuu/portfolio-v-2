const LoadingOverlay = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-base transition-opacity duration-700"
      style={{ pointerEvents: "all" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="animate-bounceSlow text-4xl select-none">🚀</div>
        <p className="text-lg text-text">Launching to orbit...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
