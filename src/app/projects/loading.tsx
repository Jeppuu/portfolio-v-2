export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex flex-col gap-4">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-lavender"></div>
      <p className="text-lg text-text mt-4">Loading projects...</p>
    </div>
  );
}
