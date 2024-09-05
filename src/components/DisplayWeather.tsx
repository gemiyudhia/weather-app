const DisplayWeather = () => {
  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>

      <p className="text-sm mt-2">
        Enter below a place you want to know the weather of and select an option
        from the dropdown
      </p>

      <input type="text" placeholder="Enter a city" className="px-2 py-1 rounded-tl-md rounded-br-md border-white shadow-sm outline-none focus:ring-2 focus:ring-blue-400 mt-10 md:mt-4" />
    </section>
  );
};

export default DisplayWeather;
