"use client";
import { Button, toast } from "@heroui/react";
const noop = () => {};

const SuccessToast = () => {
  return (
    <Button
      className="text-success-soft-foreground"
      size="sm"
      variant="tertiary"
      onPress={() =>
        toast.success("You have upgraded your plan", {
          actionProps: {
            children: "Billing",
            className: "bg-success text-success-foreground",
            onPress: noop,
          },
          description: "You can continue using HeroUI Chat",
        })
      }
    >
      Success toast
    </Button>
  );
};

export default SuccessToast;
