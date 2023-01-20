const fileNames = process.env.FILENAMES.split(" ");
const user = process.env.USERNAME;
let exitCode = 0;

if (fileNames.length > 0) {
  fileNames.forEach(file => {
    const userPart = file.split("/")[1];
    if ((userPart !== user ) || (userPart !== `${user}.json`)){
      exitCode = 1;
      console.error("Filename does not mach user: ", file);
    }
  });
}

process.exit(exitCode);
