"use client";
import { account } from "@/appwrite.config";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AutoComplete from "react-google-autocomplete";
import { toast } from "@/components/ui/use-toast";

export default function PersonalInfo() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editingInfo, setEditingInfo] = useState<any>(null);
  const [editedValue, setEditedValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const GOOGLE_MAPS_API_KEY = "AIzaSyC3o1apYVyLZnKgzMXyIYderjJED2NxWR8";

  const PERSONAL_INFO = [
    {
      label: "Name",
      value: user?.name || "Not provided",
      action: user?.name ? "Edit" : "Add",
      update: async (newValue: string) => {
        await account.updateName(newValue);
      },
    },
    {
      label: "Email Address",
      value: user?.email || "Not provided",
      action: user?.email ? "Edit" : "Add",
      update: async (newValue: string, password: string) => {
        await account.updateEmail(newValue, password);
      },
    },
    {
      label: "Phone Number",
      value:
        user?.phone ||
        "Add a number so confirmed guests and MedISearch can get in touch.",
      action: user?.phone ? "Edit" : "Add",
      update: async (newValue: string, password: string) => {
        await account.updatePhone(newValue, password);
        // await account.createPhoneVerification();
      },
    },
    {
      label: "Address",
      value: user?.prefs?.address || "Not provided",
      action: user?.prefs?.address ? "Edit" : "Add",
      update: async (newValue: string) => {
        await account.updatePrefs({ address: newValue });
      },
    },
  ];

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const fetchUser = async () => {
    try {
      const user = await account.get();
      setUser(user);
      setIsLoading(false);
    } catch (error) {
      setUser(null);
      setIsLoading(false);
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSaveChanges = async () => {
    if (editingInfo) {
      try {
        await editingInfo.update(editedValue, password);
        fetchUser();
        setPassword("");
        setEditingInfo(null);
        toast({ description: "Changes saved successfully." });
      } catch (error) {
        console.error("Failed to save changes:", error);
        toast({
          description: "Failed to save changes. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">Personal Info</h2>
        </div>
        <div className="space-y-6">
          {PERSONAL_INFO.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-[1fr_auto] items-center gap-4 border-b pb-6`}
            >
              <div>
                <div className="text-base">{item.label}</div>
                <div className="text-neutral-800/60 max-w-2xl text-sm">
                  {isLoading ? <Skeleton className="w-24 h-5" /> : item.value}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setEditingInfo(item);
                  setEditedValue(item.value);
                }}
              >
                {item.action}
              </Button>
            </div>
          ))}
          <Dialog
            open={editingInfo !== null}
            onOpenChange={() => setEditingInfo(null)}
          >
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit {editingInfo?.label}</DialogTitle>
                <DialogDescription>
                  Enter your updated value below
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    {editingInfo?.label}
                  </Label>
                  {editingInfo?.label === "Address" ? (
                    <AutoComplete
                      apiKey={GOOGLE_MAPS_API_KEY}
                      onPlaceSelected={(place) =>
                        setEditedValue(place.formatted_address)
                      }
                      className="col-span-3"
                    />
                  ) : (
                    <Input
                      id="name"
                      value={editedValue}
                      className="col-span-3"
                      onChange={handleValueChange}
                    />
                  )}
                </div>
              </div>
              {editingInfo?.label &&
              editingInfo?.label !== "Name" &&
              editingInfo?.label !== "Address" ? (
                <div className="grid gap-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-left">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      className="col-span-3"
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              ) : null}
              <DialogFooter>
                <Button type="submit" onClick={handleSaveChanges}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
