"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Calendar22Props {
  onDateChange?: (date: Date | undefined, daysRemaining: number) => void;
}

export function Calendar22({ onDateChange }: Calendar22Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  // Calculate days remaining until the selected date
  const calculateDaysRemaining = (selectedDate: Date | undefined): number => {
    if (!selectedDate) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = selectedDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Format the date to display
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(date)
    : "Огноо сонгох";

  // Calculate days remaining
  const daysRemaining = calculateDaysRemaining(date);

  return (
    <div className="flex items-center gap-2 ml-2.5">
      <div className="flex flex-col">
        <span>{formattedDate}</span>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-5 h-5 justify-center font-normal"
          >
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              if (selectedDate) {
                const remaining = calculateDaysRemaining(selectedDate);
                onDateChange?.(selectedDate, remaining);
              } else {
                onDateChange?.(undefined, 0);
              }
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
