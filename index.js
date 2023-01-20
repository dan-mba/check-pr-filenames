const fileNames = process.env.FILENAMES.split(" ");
const user = process.env.USERNAME;
let exitCode = 0;

if (fileNames.length > 0) {
  fileNames.forEach(file => {
    const splitFile = file.split("/");
    const userPart = splitFile[1];
    if ((userPart !== user ) && (userPart !== `${user}.json`)){
      if((splitFile.length == 4) && (splitFile[2] === "testimonials") && (splitFile[3] === `${user}.json`)) {
        return;
      }
      exitCode = 1;
      console.error("Filename does not mach user: ", file);
    }
  });
}

process.exit(exitCode);
