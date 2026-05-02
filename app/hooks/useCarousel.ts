"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface UseCarouselOptions {
  itemCount: number;
  autoplayIntervalMs?: number;
  dragThresholdPx?: number;
}

interface UseCarouselReturn {
  active: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  handleDragEnd: (_: unknown, info: { offset: { x: number } }) => void;
}

export function useCarousel({
  itemCount,
  autoplayIntervalMs = 4000,
  dragThresholdPx = 80,
}: UseCarouselOptions): UseCarouselReturn {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % itemCount);
    }, autoplayIntervalMs);
  }, [stopAutoPlay, itemCount, autoplayIntervalMs]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    if (isPaused) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  }, [isPaused, startAutoPlay, stopAutoPlay]);

  const goTo = useCallback(
    (index: number) => {
      setActive(index);
      startAutoPlay();
    },
    [startAutoPlay]
  );

  const goNext = useCallback(() => {
    goTo((active + 1) % itemCount);
  }, [active, itemCount, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + itemCount) % itemCount);
  }, [active, itemCount, goTo]);

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      if (info.offset.x > dragThresholdPx) {
        goPrev();
      } else if (info.offset.x < -dragThresholdPx) {
        goNext();
      }
    },
    [dragThresholdPx, goPrev, goNext]
  );

  return {
    active,
    goTo,
    goNext,
    goPrev,
    isPaused,
    setIsPaused,
    handleDragEnd,
  };
}
