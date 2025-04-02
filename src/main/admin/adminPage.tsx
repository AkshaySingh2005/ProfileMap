import Footer from "@/components/footer/footer";
import AdminHeader from "./adminHeader";
import Dashboard from "./dashboard";

const AdminPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <main className="flex-1">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
