"use client";
import { useState } from "react";
import { Feedback } from "./components/Feedback";
import { Info } from "./components/Info";
import { SubscriptionForm } from "./components/SubscriptionForm";

export const Subscription = () => {
  const [isSend, setIsSend] = useState(false);
  return (
    <div className="w-full md:flex lg:gap-[126px] md:gap-[53px]">
      {isSend ? <Feedback /> : <SubscriptionForm setIsSend={setIsSend} />}
      <Info />
    </div>
  );
};
