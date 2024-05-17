const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 10000,
};

/**
 * This function retrieves the user's current geolocation using the browser's geolocation API.
 *
 * @throws Will throw an error if the browser does not support geolocation.
 * @returns A Promise that resolves to a GeolocationPosition object containing the user's latitude and longitude.
 *          If the geolocation retrieval fails, the Promise will be rejected with an error message.
 */
export const getGeolacation = (): Promise<GeolocationPosition> => {
  if ("geolocation" in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        () => reject(new Error("We couldn´t get your location")),
        options
      );
    });
  } else {
    throw new Error("Your navigator doesn´t suport geolacation");
  }
};

/**
 * This function retrieves the user's current geolocation and returns it as an object with latitude and longitude.
 * It uses the `getGeolacation` function to get the geolocation data.
 *
 * @async
 * @throws Will throw an error if the browser does not support geolocation or if the geolocation retrieval fails.
 * @returns A Promise that resolves to an object containing the user's latitude and longitude.
 *          If the geolocation retrieval fails, the Promise will be rejected with an error message.
 */
export const getCurrentLocation = async () => {
  const {
    coords: { latitude, longitude },
  } = await getGeolacation();
  return { latitude, longitude };
};
