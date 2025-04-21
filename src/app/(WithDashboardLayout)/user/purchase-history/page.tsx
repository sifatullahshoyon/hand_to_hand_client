import PurchaseHistory from "@/components/modules/PurchaseHistory/PurchaseHistory";
import { getAllOrders } from "@/services/purchaseHistory";
import React from "react";

const purchaseHistoryPage = async () => {
  const { data } = await getAllOrders();
  console.log("Purchase History Data:", data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Purchase History</h1>
      <PurchaseHistory data={data} />
    </div>
  );
};

export default purchaseHistoryPage;
