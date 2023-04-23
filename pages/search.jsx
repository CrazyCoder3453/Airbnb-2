import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Head from "next/head";
import InfoCard from "./components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Head>
        <title>Stays in {location}</title>
        <link
          rel="shortcut icon"
          href="https://static-00.iconduck.com/assets.00/airbnb-icon-512x512-d9grja5t.png"
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${numGuests} guests`} />
      <main className="flex">
        <section className="pt-14 flex-grow px-6">
          <p className="text-xs">
            300+ - {range} - stays for {numGuests} guest(s)
          </p>
          <p className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </p>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

            <div className="flex flex-col">
            {searchResults.map(
                ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                />
                )
            )}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
