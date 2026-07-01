import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { DefaultLayout } from "./screens/DefaultLayout";
import { SalesCarnet } from "./screens/SalesCarnet";
import { PaymentInstallments } from "./screens/PaymentInstallments";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/sales" element={<SalesCarnet />} />
        <Route path="/paymentInstallments" element={<PaymentInstallments />} />
      </Route>
    </Routes>
  );
}
