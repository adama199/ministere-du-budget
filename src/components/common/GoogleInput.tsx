import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

function getAddress(results, criters: string[]) {
  for (const { address_components } of results) {
    for (const ad of address_components) {
      let exists = true;
      for (const type of criters) {
        if (!ad.types.includes(type)) exists = false;
      }
      if (exists === true) {
        return ad.long_name;
      }
    }
  }
  return "";
}

export function getCurrentCityFromAdress(results) {
  let res = getAddress(results, ["sublocality"]);
  if (res === "") {
    res = getAddress(results, ["sublocality_level_1"]);
  }
  if (res === "") {
    res = getAddress(results, ["locality"]);
  }
  if (res === "") {
    res = getAddress(results, ["administrative_area_level_2"]);
  }
  if (res === "") {
    res = getAddress(results, ["administrative_area_level_1"]);
  }
  if (res === "") {
    res = getAddress(results, ["country"]);
  }
  return res;
}

export function getCurrentCountryFromAdress(results) {
  let res = getAddress(results, ["country"]);
  if (res === "") {
    res = getAddress(results, ["country"]);
  }
  return res;
}

function getAd(results, criters: string[]) {
  for (const result of results) {
    const { address_components } = result;
    let exists = false;
    for (let ad of address_components) {
      for (const type of criters) {
        if (ad.types.includes(type)) exists = true;
      }
    }
    if (exists) {
      return {
        rue: String(result?.formatted_address),
        latitude: String(result?.geometry?.location?.lat()),
        longitude: String(result?.geometry?.location?.lng()),
        ville: getCurrentCityFromAdress(results),
        country: getCurrentCountryFromAdress(results),
      };
    }
  }
  return null;
}

export function getAddressFromReults(results): Data | null {
  let res = getAd(results, ["street_address"]);
  if (res === null) {
    res = getAd(results, ["route"]);
  }
  if (res === null) {
    res = getAd(results, ["neighborhood", "political"]);
  }
  if (res === null) {
    res = getAd(results, ["sublocality_level_1"]);
  }
  if (res === null) {
    res = getAd(results, ["country"]);
  }
  return res;
}







export type Data = {
  rue: string;
  latitude: string;
  longitude: string;
  ville: string;
  country: string;
};
type GoogleInputProps = {
  value: string;
  className?: string;
  onChange: (data: Data) => void;
  placeholder?: string;
};
function GoogleInput({
  value,
  onChange,
  className = "form-control form-control-profil-custom",
  placeholder = "Adresse",
}: GoogleInputProps) {
  const [search, setSearch] = React.useState(value || "");
  React.useEffect(() => {
    setSearch(value);
  }, [value]);
  const onError = React.useCallback(
    (status, clearSuggestions: () => void) => {
      console.log("Google Maps API returned error with status: ", status);
      clearSuggestions();
    },
    []
  );
  return (
    <PlacesAutocomplete
      value={search || ""}
      onError={onError}
      onChange={setSearch}
      onSelect={async (address: string) => {
        setSearch(address);

        try {
          const res = await geocodeByAddress(address);
          const data = getAddressFromReults(res);
          if (data) {
            onChange({
              ...data,
              rue: address,
            });
            return;
          }
        } catch (ex) {}
        onChange({
          latitude: "0",
          longitude: "0",
          rue: address,
          ville: "",
          country: "",
        });
      }}
      // apiOptions={{ language: "fr", region: "sn" }}
      searchOptions={{
        componentRestrictions: {
          country: ["sn"],
        },
      }}
    >
      {({
        getInputProps,
        suggestions,
        getSuggestionItemProps,
        loading,
      }: {
        getInputProps;
        suggestions;
        getSuggestionItemProps;
        loading: boolean;
      }) => (
        <div>
          {/* @ts-ignore */}
          <input
            {...getInputProps({
              placeholder: placeholder,
              className: className,
            })}
          />
          <div className="autocomplete-dropdown-container fixe-autocomplete">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? {
                    backgroundColor: "#fafafa",
                    cursor: "pointer",
                  }
                : {
                    backgroundColor: "#EEE",
                    cursor: "pointer",
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    style: {
                      ...style,
                      ...{
                        padding: 10,
                        marginBottom: 2,
                        fontWeight: "bold",
                        color: "#2c3e50",
                      },
                    },
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default GoogleInput;









