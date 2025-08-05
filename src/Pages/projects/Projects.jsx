import MasterCard from "./MasterCard/MasterCard";

export default function Projects() {
  return (
    <div id="Projects"  className="min-h-screen bg-[var(--color-beige)] p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
          <h1 className="text-5xl font-bold text-[var(--color-black)] m-12 ">
           Projects
          </h1>
        <MasterCard/>
      </div>
    </div>
  );
}

 