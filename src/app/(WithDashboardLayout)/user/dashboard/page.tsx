"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserDashboard = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="grid grid-cols-1  gap-6">
        <div className="h-96 rounded w-96 shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="user img"
            className=" rounded-full mx-auto mt-5"
            width={224}
            height={50}
            placeholder="blur"
            loading="lazy"
            blurDataURL="all"
          />
          <p className="my-6 text-2xl text-center  text-black">{user?.name}</p>
          <div className="text-center">
            <Link href="/user/profile">
              <Button className=" bg-purple-500 hover:bg-purple-600 text-white cursor-pointer font-semibold">
                Edit Your Profile
                <Edit />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
