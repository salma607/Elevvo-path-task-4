import Card from "../../Component/Card/Card"; // Adjust the path as needed
export default function Service() {
  return (
    <section id="service">
      <h1 
      style={{ fontSize:"35px",
        color:"var(--color-pink)",
        fontWeight:"bold",
        justifyContent:"center",
        display:"flex"
        

      }} >
        Look at my services
      </h1>
      <Card />
  
    </section>
  );
}