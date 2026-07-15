"use client";

import AuthLinks from "@/components/AuthLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Button variant="default" onClick={() => alert("hello")}>
          Button.
        </Button>

        <AuthLinks />
        <Button variant="outline">
          <Link href="/dashboard">dashboard</Link>
        </Button>

        {/* example for official shadcn site */}
        <Dialog>
          <form>
            <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Username</Label>
                  <Input id="username-1" name="username" defaultValue="@peduarte" />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
        {/* example for official shadcn site */}
        {/* practice dialog */}

        <Dialog>
          <form>
            <DialogTrigger render={<Button className="bg-blue-800">Show Dialog</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>This is my dialog</DialogTitle>
                <DialogDescription>ok this is description</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </form>
        </Dialog>

        {/* practice dialog */}
      </main>
    </div>
  );
}
