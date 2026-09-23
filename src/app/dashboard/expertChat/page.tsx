import ExpertChat from "@/components/ExpertContent";
import { Suspense } from "react";

export default function ExpertChatPage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <ExpertChat />
    </Suspense>
  )
}