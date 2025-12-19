import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const navList = ["Home", "About", "Contact", "Cart"];

  const footerList = ["Facebook", "Linkedin", "Viber", "YouTube", "Email"];

  return (
    <>
      <Navbar list={navList} />

      <main>
        <h1>My First React / Next.js Page</h1>
        <p>Navbar და Footer props</p>
      </main>

      <Footer list={footerList} />
    </>
  );
}
