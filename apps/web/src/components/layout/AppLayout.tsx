import { Outlet } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";

export default function AppLayout() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
}
