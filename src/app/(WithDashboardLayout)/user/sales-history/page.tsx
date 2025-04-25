import SalesHistory from "@/components/modules/SalesHistory/SalesHistory";
import { getAllOrders } from "@/services/purchaseHistory";
import { getAllSales } from "@/services/sales";
import { ITransaction } from "@/types/transaction";

const salesHistoryPage = async () => {
  // Get all orders
  const { data: orderData } = await getAllOrders();
  const { id } = orderData[0]?.transaction;

  // Get all sales history of the seller
  const { data: salesHistory } = await getAllSales(orderData[0]?.user);

  // Filter to keep only one entry per `itemID` with the latest status
  const uniqueSalesHistory: ITransaction[] = Object.values(
    salesHistory.reduce(
      (acc: Record<string, ITransaction>, sale: ITransaction) => {
        // If the itemID already exists, update it with the latest status
        if (
          !acc[sale.itemID._id] ||
          new Date(sale.updatedAt) > new Date(acc[sale.itemID._id].updatedAt)
        ) {
          acc[sale.itemID._id] = sale;
        }
        return acc;
      },
      {}
    )
  );

  // console.log("Unique Sales History:", uniqueSalesHistory);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Sales History</h1>
      <SalesHistory sales={uniqueSalesHistory} transactionId={id} />
    </div>
  );
};

export default salesHistoryPage;
