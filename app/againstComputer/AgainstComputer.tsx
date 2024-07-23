"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AgainstComputerContent = dynamic(() => import("./AgainstComputerContent"), {
  ssr: false,
});

const AgainstComputer: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AgainstComputerContent />
    </Suspense>
  );
};

export default AgainstComputer;
