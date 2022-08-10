import { useState } from "react";

const ANIMALS = ["dogs", "cats", "bears", "lions", "penguins"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>
            {ANIMALS.map((animal) => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value=""></option>
            {BREEDS.map((breed) => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
