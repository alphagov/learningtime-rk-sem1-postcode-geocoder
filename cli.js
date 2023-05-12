import { main, log } from "./app.js";

const base_maps_url = "http://maps.google.com/maps?z=12&t=m&q=loc:";

export function getPostcodeFromArgs() {
  let postcode = process.argv[2];
  if (process.argv.length > 3) {
    throw new Error(
      "Too many arguments. This tool expects a single UK postcode argument to be given on the command line. Your postcode should not contain any spaces.`"
    );
  }
  if (postcode) {
    return String(postcode);
  }
  throw new Error(
    "No postcode given. You can provide a UK postcode by running `node app.js <postcode>. Your postcode should not contain spaces.`"
  );
}

const coordinates = await main(getPostcodeFromArgs());

log(`Coordinates: ${coordinates[0]},${coordinates[1]}`);
log(`Google maps link: ${base_maps_url}${coordinates[0]}+${coordinates[1]}}`);
