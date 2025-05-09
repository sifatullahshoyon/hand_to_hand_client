"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export default function TeamSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Full-stack developer with 5+ years of experience building web applications.",
    },
    {
      id: 2,
      name: "Sam Rivera",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "Creative designer focused on crafting intuitive and beautiful user experiences.",
    },
    {
      id: 3,
      name: "Taylor Kim",
      role: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      bio: "Organized and detail-oriented manager keeping projects on track and on budget.",
    },
    {
      id: 4,
      name: "Jordan Patel",
      role: "Backend Engineer",
      avatar: "https://randomuser.me/api/portraits/men/79.jpg",
      bio: "Database expert specializing in scalable and efficient backend solutions.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
      <div data-aos="fade-up" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-purple-500">
            Innovate Team
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Pushing boundaries and creating exceptional experiences through
            collaboration, creativity, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card
                className={`h-full p-6 transition-all duration-300 border-none bg-white ${
                  activeId === member.id
                    ? "border-purple-500 shadow-lg shadow-purple-500/10"
                    : "hover:border-purple-300"
                }`}
                onMouseEnter={() => setActiveId(member.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4 ">
                    <AvatarImage
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-purple-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
