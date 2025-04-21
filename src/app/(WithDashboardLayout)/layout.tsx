"use client";
import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center  transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="hidden md:block ">
              <h1 className="text-2xl inline mr-6">Hi, Welcome Back</h1>
              <p className="inline text-2xl dark:text-white text-black font-semibold">
                {user?.name}
              </p>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col   pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-gray-100 md:min-h-min p-6">
            {/* passing children */}
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
