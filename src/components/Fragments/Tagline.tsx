interface Props {
  children: React.ReactNode
}

const Tagline = ({children}: Props) => {
  return (
    <>
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>

      <p className="text-sm mt-2">
        {children}
      </p>
    </>
  );
}

export default Tagline
