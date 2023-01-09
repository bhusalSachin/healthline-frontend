import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="w-full h-[4em]">
        <Header />
      </div>
      <div>This is our main client side</div>
      <div>Welcome</div>
    </div>
  );
}
