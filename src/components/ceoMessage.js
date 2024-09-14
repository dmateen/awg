const CeoMessage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 mt-20 md:mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          Message from the CEO
        </h2>

        {/* CEO Image */}
        {/* <div className="flex justify-center mb-8">
          <Image
            src="/chairman.jpg"
            alt="CEO Image"
            width={80}
            height={120}
            className="rounded-full"
          />
        </div> */}

        <div className="bg-gradient-to-r from-stone-700 to-gray-800 p-10 rounded-lg shadow-xl max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            From a humble beginning, fueled by my mother's prayers and the
            blessings of my late father, our journey started with a small shop
            and has grown into an international enterprise. The key to success
            lies in honesty, self-reliance, self-esteem, and relentless
            perseverance. Time is money, and using it wisely is crucial.
          </p>
          <p className="mb-6">
            Throughout this journey, our unwavering focus on quality and client
            loyalty has remained constant. This principle continues to guide us
            as we grow and solidify our position as the premier trading firm in
            the country.
          </p>
          <p className="italic text-right mt-8 font-semibold">
            The Chairman,
            <br />
            <span className="text-2xl font-signature">Mian Abdul Waheed</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
