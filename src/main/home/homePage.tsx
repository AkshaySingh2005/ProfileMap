import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/landingPage/hero";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
