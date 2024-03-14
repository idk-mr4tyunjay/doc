
function Navbar() {
  return (
    <div className="fixed z-[100] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      Navbar
      <div className="logo" />
      <div className="links flex gap-10">
        {["Services", "our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-light capitalize ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
