const flowers = {
  red: { url: "img/rosas_rojas.jpg" },
  pink: { url: "img/rosas_rosas.jpg" },
  yellow: { url: "img/rosas_amarillas.jpg" },
  white: { url: "img/rosas_blancas.jpg" },
  multicolor: { url: "img/rosas_multi.jpg" },
};

const onClickCheckBox = (data) => {
  const id = data.id;
  const url = flowers[id].url;

  document.getElementById("img").src = url;
};
