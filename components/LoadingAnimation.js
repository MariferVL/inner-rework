"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animations/loading.json";

export default function LoadingAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 250, height: 250 }}
    />
  );
}