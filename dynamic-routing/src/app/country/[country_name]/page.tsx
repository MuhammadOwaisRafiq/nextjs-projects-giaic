export default function CountryName({ params }: any) {
    // ARRAY OF OBJECTS
    // COUNTRIES DATA
    const countries: {
        name: string,
        capital: string,
        population: number
    }[] = [
        {
            name: "Pakistan",
            capital: "Islamabad",
            population: 251269164
        },
        {
            name: "India",
            capital: "Delhi",
            population: 1450935791
        },
        {
            name: "Iran",
            capital: "Tehran",
            population: 91567738
        },
        {
            name: "Iraq",
            capital: "Baghdad",
            population: 46042015
        },
        {
            name: "Palestine",
            capital: "Jerusalem",
            population: 5495443
        },
    ];

    // FUNCTION TO FIND COUNTRY
    function findCountry(country_url: string) {
        return countries.find(country => country.name.toLocaleLowerCase() === country_url.toLocaleLowerCase());
    }

    let result = findCountry(params.country_name);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            {result ? (
                <>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase text-center">
                        Country Name:{" "}
                        <span className="text-green-600">{result.name}</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-2 uppercase text-center">
                        Capital:{" "}
                        <span className="text-green-600">{result.capital}</span>
                    </h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-700 uppercase text-center">
                        Population:{" "}
                        <span className="text-green-600">{result.population.toLocaleString()}</span>
                    </h3>
                </>
            ) : (
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-500 uppercase text-center">
                    {params.country_name} Not Found
                </h1>
            )}
        </div>
    );
}
