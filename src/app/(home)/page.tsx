import Button from "@/components/ui/yaos-ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 ">
      <div className="w-12 h-12 flex items-center justify-center gap-10">
        <Button size={"default"}>Button</Button>
        <Button variant={"destructive"}>Button</Button>
        <Button variant={"ghost"}>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"secondary"}>Button</Button>
      </div>
    </div>
  );
}
