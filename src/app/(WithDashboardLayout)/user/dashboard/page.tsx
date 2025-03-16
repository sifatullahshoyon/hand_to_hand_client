import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-amber-100" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] rounded-xl bg-muted mt-4">
        <p>Welcome to dashboard</p>
      </div>
    </div>
  );
};

export default UserDashboard;
