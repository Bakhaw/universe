function Chip({ label }) {
  return (
    <div className="px-6 py-1 border-[1px] border-very-dark-blue bg-very-dark-blue-transparent rounded-full">
      <span className="text-xl">{label}</span>
    </div>
  );
}

export default Chip;
