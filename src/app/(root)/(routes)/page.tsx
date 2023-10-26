"use client";
import { LeftSidebar } from "@/app/components/LeftSidebar";
import MainComponent from "@/app/components/MainSection";
import RightSection from "@/app/components/RIghtSidebar";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="w-full h-[100vh]  justify-center bg-black items-center flex relative">
      <div className="xl:max-w-[70vw] w-full h-full relative flex justify-between">
        {/* left side for navigation/header */}
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  );
}
