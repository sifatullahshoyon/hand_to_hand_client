"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserProfileUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  userInfo: { name: string; phone: string };
  onUpdate: (updatedInfo: { name: string; phone: string }) => void;
}

const UserProfileUpdateModal: React.FC<UserProfileUpdateModalProps> = ({
  isOpen,
  onClose,
  userInfo,
  onUpdate,
}) => {
  const [formData, setFormData] = useState({
    name: userInfo.name,
    phone: userInfo.phone,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-0">
        <DialogHeader>
          <DialogTitle>Update Info</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <Label htmlFor="update-name" className="mb-2 font-semibold text-lg">
              Name
            </Label>
            <Input
              id="update-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Input */}
          <div>
            <Label
              htmlFor="update-phone"
              className="mb-2 font-semibold text-lg"
            >
              Phone
            </Label>
            <Input
              id="update-phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="bg-gray-100 text-gray-800 hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileUpdateModal;
