let csvData = "";
fetch("assets/information.csv")
  .then((res) => res.text())
  .then((data) => {
    csvData = data;
    csvData = csvData.replace(/"(.*?)"/g, (str) =>
      str.replaceAll(",", "###COMMA###")
    );
  })
  .then(() => {
    let ame = informationReader(csvData);
    console.log(ame);
  })
  .catch((e) => console.error(e));

const informationReader = (csvText) => {
  data = {};

  const splitter = (line) => {
    return (splitLine = line

      .replaceAll(",", "||||")
      .replaceAll("###COMMA###", ",")
      .trim()
      .split("||||"));
  };

  const csvData = csvText.split("\n");

  const header = splitter(csvData[0]);
  console.log(header);

  return data;
};

const informationData = informationReader(csvData);
