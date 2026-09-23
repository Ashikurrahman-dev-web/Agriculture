import FarmerChat from "@/components/FarmerContent";
import { Suspense } from "react";

export default function FarmerChatPage(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <FarmerChat />
    </Suspense>
  )
}