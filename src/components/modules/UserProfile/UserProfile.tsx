"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Pencil } from "lucide-react";
import UserProfileUpdateModal from "./UserProfileUpdateModal";
import { useUser } from "@/context/UserContext";
// Import the updateUser function
import { toast } from "sonner"; // For showing success/error messages
import { updateUser } from "@/services/user";

const UserProfile = () => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "user@gmail.com",
    phone: user?.phoneNumber || "123-456-7890",
    _id: user?._id,
  });

  const handleUpdateUserInfo = async (updatedInfo: {
    name: string;
    phone: string;
  }) => {
    try {
      const response = await updateUser(userInfo._id!, updatedInfo);

      if (response.success) {
        // Update the local state with the new user info
        setUserInfo((prev) => ({
          ...prev,
          ...response.data, // Use the updated data from the API response
        }));
        toast.success("User information updated successfully!");
      } else {
        toast.error("Failed to update user information.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating user information.");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg bg-white border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            User Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="mb-2 font-semibold text-lg">
              Name
            </Label>
            <Input id="name" value={userInfo.name} readOnly />
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="mb-2 font-semibold text-lg">
              Email
            </Label>
            <Input id="email" value={userInfo.email} readOnly />
          </div>

          {/* Phone Field */}
          <div>
            <Label htmlFor="phone" className="mb-2 font-semibold text-lg">
              Phone
            </Label>
            <Input id="phone" value={userInfo.phone} readOnly />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold"
          >
            Update Info <Pencil className="ml-2" />
          </Button>
        </CardFooter>
      </Card>

      {/* Update Info Modal */}
      <UserProfileUpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userInfo={userInfo}
        onUpdate={handleUpdateUserInfo}
      />
    </div>
  );
};

export default UserProfile;
