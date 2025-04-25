import PurchaseHistory from "@/components/modules/PurchaseHistory/PurchaseHistory";
import { getAllOrders } from "@/services/purchaseHistory";
import React from "react";

export const dynamic = "force-dynamic"; // 💡 Add this to fix the dynamic cookies issue

const purchaseHistoryPage = async () => {
  const { data } = await getAllOrders();

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">Purchase History</h1>
      <PurchaseHistory data={data} />
    </>
  );
};

export default purchaseHistoryPage;
