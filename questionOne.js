let GivenAry = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS",
];

function GroupingWordswithSameLetter(strs) {
  let hash = {};

  strs.forEach((str) => {
    let letters = str.split("").sort().join("");

    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
  });

  const keys = Object.keys(hash);
  const values = keys.map(function (val) {
    return hash[val].join("-");
  });
  return values.join("\n");
}

console.log(GroupingWordswithSameLetter(GivenAry));
