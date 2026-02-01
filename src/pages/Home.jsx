
import trainHero from "../assets/images/train-hero.jpg";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div className="bg-gray-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* LEFT SIDE – BOOK TICKET CARD */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">

          {/* TABS */}
          <div className="flex">
            <button className="flex-1 bg-blue-900 text-white py-3 font-semibold">
              📄 PNR STATUS
            </button>
            <button className="flex-1 bg-blue-800 text-white py-3 font-semibold">
              📊 CHARTS / VACANCY
            </button>
          </div>

          {/* CARD BODY */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              BOOK TICKET
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="From Station"
                className="border p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="To Station"
                className="border p-3 rounded-md"
              />
              <input
                type="date"
                className="border p-3 rounded-md"
              />
              <select className="border p-3 rounded-md">
                <option>All Classes</option>
                <option value="1A">First AC (1A)</option>
                <option value="2A">Second AC (2A)</option>
                <option value="3A">Third AC (3A)</option>
                <option value="SL">Sleeper (SL)</option>
                <option value="CC">Chair Car (CC)</option>
                <option value="2S">Second Sitting (2S)</option>
              </select>
            </div>

            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-md">
              🔍 Search Trains
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – INDIAN RAILWAYS HERO */}
        <div
          className="relative rounded-lg overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${trainHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/50"></div>

          <div className="relative p-10 text-white">
            <h1 className="text-5xl font-extrabold tracking-wide">
              INDIAN RAILWAYS
            </h1>

            <div className="mt-4 text-xl space-x-4">
              <span>Safety</span> | 
              <span> Security</span> | 
              <span> Punctuality</span>
            </div>
          </div>
        </div>
          {/* FEATURES SECTION */}
          <div className="max-w-7xl mx-auto px-6 mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Railway Services
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              <FeatureCard
                icon="🚆"
                title="Search Trains"
                link="/search"
              />

              <FeatureCard
                icon="🎫"
                title="PNR Status"
                link="/pnr"
              />

              <FeatureCard
                icon="📊"
                title="Charts / Vacancy"
                link="/charts"
              />

              <FeatureCard
                icon="🧾"
                title="Booking History"
                link="/history"
              />

              <FeatureCard
                icon="📍"
                title="Live Train Status"
                link="/live-status"
              />

              <FeatureCard
                icon="❌"
                title="Cancel Ticket"
                link="/cancel"
              />

            </div>
          </div>

      </div>
    </div>
  );
}

export default Home;
