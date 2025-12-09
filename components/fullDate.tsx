"use client";

import { useState, useEffect } from "react";

export default function FullDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const days = [
      "Ням",
      "Даваа",
      "Мягмар",
      "Лхагва",
      "Пүрэв",
      "Баасан",
      "Бямба",
    ];

    const months = [
      "1-р сар",
      "2-р сар",
      "3-р сар",
      "4-р сар",
      "5-р сар",
      "6-р сар",
      "7-р сар",
      "8-р сар",
      "9-р сар",
      "10-р сар",
      "11-р сар",
      "12-р сар",
    ];

    const now = new Date();

    const formatted =
      `${now.getFullYear()} ${months[now.getMonth()]} ` +
      `${now.getDate()}н, ${days[now.getDay()]} гараг`;

    setDate(formatted);
  }, []);

  return <div className="text-xl font-light">{date}</div>;
}
