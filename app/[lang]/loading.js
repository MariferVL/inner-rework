import LoadingAnimation from "@/components/LoadingAnimation";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <LoadingAnimation />
    </div>
  );
}