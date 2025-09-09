import { isPlayOK } from "@/utils/date";

function playMusic(url: string, date: string): boolean {
  // 외부 JS 호출
  isPlayOK(date);
  return true;
}

export {};
