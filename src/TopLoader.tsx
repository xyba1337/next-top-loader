"use client";

import React, { useEffect } from "react";
import { TopLoaderTypes } from "./types";
import { useRouterRefresh } from "./useRouterRefresh";
import { usePathname } from "next/navigation";

const TopLoader: React.FC<TopLoaderTypes> = ({
  className = "",
  color = "#22c55e",
  height = 3,
  initialProgress = 20,
  shadowColor = "rgba(34,197,94,0.4)",
  zIndex = 50,
}) => {
  const [showBar, setShowBar] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(initialProgress);

  const pathName = usePathname();
  const refresh = useRouterRefresh();

  useEffect(() => {
    setShowBar(false);
    setIsLoading(true);
    setProgress(20);
    refresh().then(() => {
      setIsLoading(false);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 400);
    });
  }, [pathName]);

  useEffect(() => {
    if (isLoading && progress < 70) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 5, 40));
      }, 400);
      return () => clearInterval(timer);
    }
  }, [isLoading, progress]);

  useEffect(() => {
    if (isLoading) {
      setShowBar(true);
    } else {
      const timer = setTimeout(() => setShowBar(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="fixed left-0 right-0 top-0" style={{ zIndex }}>
      <div
        className={`h-[3px] w-0 transition-all duration-300 ease-out ${
          !showBar ? "opacity-0" : "opacity-100"
        } ${className}`}
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: `${height}px`,
          boxShadow: `0 0 8px ${shadowColor}`,
        }}
      />
    </div>
  );
};

export default TopLoader;
