import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Compass, FilePlus2, LayoutDashboard, LifeBuoy, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/navbar";

const main = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Browse Items", url: "/browse", icon: Compass },
  { title: "Report Item", url: "/report", icon: FilePlus2 },
] as const;

const secondary = [
  { title: "Notifications", icon: Bell },
  { title: "Settings", icon: Settings },
  { title: "Help & Support", icon: LifeBuoy },
] as const;

export function DashboardSidebar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 py-4 group-data-[collapsible=icon]:px-2">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent p-3 group-data-[collapsible=icon]:hidden">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            AR
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">Ananya Rao</p>
            <p className="truncate text-xs text-muted-foreground">CS · Batch of 2027</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
