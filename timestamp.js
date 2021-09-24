// 
// This script is used to add timestamps to builds to easily tell
// if you are running the newest version of the app while debugging.
// Also appears when deployed to show users when the last change was made

var replace = require("replace-in-file");

const moment = require("moment-timezone");

var timeStamp = moment(new Date())
  .tz("America/Chicago")
  .format("MM/DD/YYYY hh:mm:ss A z");

const options = {
  files: [
    "src/environments/environment.ts",
    "src/environments/environment.prod.ts",
  ],
  from: /timeStamp: '(.*)'/g,
  to: "timeStamp: '" + timeStamp + "'",
  allowEmptyPaths: false,
};
try {
  let changedFiles = replace.sync(options);
  if (changedFiles == 0) {
    throw (
      "Please make sure that the file '" +
      options.files +
      "' has \"timeStamp: ''\""
    );
  }
  console.log("Build timestamp is set to: " + timeStamp);
} catch (error) {
  console.error("Error occurred:", error);
  throw error;
}
