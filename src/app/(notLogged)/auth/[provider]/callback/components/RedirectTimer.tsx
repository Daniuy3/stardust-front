"use client";

import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

interface RedirectTimerProps {
    seconds: number;
    label: string;
    onComplete: () => void;
}

export const RedirectTimer = ({ seconds, label, onComplete }: RedirectTimerProps) => {
    const [remainingMilliseconds, setRemainingMilliseconds] = useState(seconds * 1000);
    const hasCompleted = useRef(false);

    useEffect(() => {
        const totalMilliseconds = seconds * 1000;
        const startTime = performance.now();
        let animationFrame: number;

        hasCompleted.current = false;

        const updateTimer = (currentTime: number) => {
            const elapsedMilliseconds = currentTime - startTime;
            const nextRemainingMilliseconds = Math.max(totalMilliseconds - elapsedMilliseconds, 0);

            setRemainingMilliseconds(nextRemainingMilliseconds);

            if (nextRemainingMilliseconds <= 0) {
                if (!hasCompleted.current) {
                    hasCompleted.current = true;
                    onComplete();
                }

                return;
            }

            animationFrame = requestAnimationFrame(updateTimer);
        };

        animationFrame = requestAnimationFrame(updateTimer);

        return () => cancelAnimationFrame(animationFrame);
    }, [seconds, onComplete]);

    const progress = (remainingMilliseconds / (seconds * 1000)) * 100;
    const remainingSeconds = Math.max(Math.ceil(remainingMilliseconds / 1000), 1);
    const timeLabel = remainingSeconds === 1 ? 'segundo' : 'segundos';

    return (
        <div className="my-5 flex w-full items-center justify-center gap-6 rounded-lg border border-purple-100 bg-white px-5 py-4 shadow-sm shadow-purple-100 sm:px-8">
            <div className="relative flex size-18 shrink-0 items-center justify-center">
                <CircularProgress
                    variant="determinate"
                    value={100}
                    size={72}
                    thickness={5}
                    sx={{
                        color: '#e9e5f0',
                        position: 'absolute',
                        '& .MuiCircularProgress-circle': {
                            transition: 'none',
                        },
                    }}
                />
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={72}
                    thickness={5}
                    sx={{
                        color: '#7e22ce',
                        position: 'absolute',
                        '& .MuiCircularProgress-circle': {
                            strokeLinecap: 'round',
                            transition: 'none',
                        },
                    }}
                />
            </div>
            <div className="text-left">
                <p className="text-base font-medium text-gray-700">
                    {label}
                </p>
                <p className="text-2xl font-bold text-purple-700">
                    {remainingSeconds} {timeLabel}
                </p>
            </div>
        </div>
    )
}
