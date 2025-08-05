import Card from "../../Component/Card/Card";

export default function Service() {
  return (
    <section 
      id="service" 
      className="min-h-screen flex flex-col items-center justify-center p-2"
    >
      <h1 
        className="text-4xl font-bold m-8"
        style={{ color: "var(--color-pink)" }}
      >
        Look at my services
      </h1>
      
      <Card />
    </section>
  );
}