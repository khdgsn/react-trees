import "./App.css";
import Button from "./Button.js";

function App() {
  let trees = [
    {
      name: "Oak",
      description:
        "An oak is a tree or shrub in the genus Quercus of the beech family, Fagaceae. There are approximately 500 extant species of oaks.",
      img: 
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Keeler_Oak_Tree_-_distance_photo%2C_May_2013.jpg"
    },

    {
      name: "Silver Birch",
      description:
        "The silver birch is a medium-sized deciduous tree that owes its common name to the white peeling bark on the trunk",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Betula_pendula_Finland.jpg"
    },

    {
      name: "Ash",
      description:
        "The young tree has greyish bark, which is smooth. As the tree becomes older, the bark becomes grey/brown and creased",
      img:
        "https://forestryandland.gov.scot/images/learn/treespecies/ash-tree-Wikicommons-Willow.jpg"
    },

    {
      name: "Conifer",
      description:
        "Conifers are, most simply, woody plants. There are about 630 species.",
      img: 
        "https://www.treehugger.com/thmb/czCVXhELhXiZQq7Hit3T4RFuCG0=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1303704234-8c36315e32084ca89141c45386ce07e8.jpg"
    },

    {
      name: "Maple",
      description:
        "Maples are versatile trees that tolerate a range of soils and sites with light conditions from full sun to partial shade",
      img:
        "https://www.gardendesign.com/pictures/images/900x705Max/site_3/japanese-maple-tree-acer-palmatum-dreamstime_12239.jpg"
    },
  ];

  return (
    <div className="container">
      <h1>Types of trees</h1>
      {trees.map((tree) => (
        <div key={tree.name} className="content">
          <h2>{tree.name}</h2>
          <p>{tree.description}</p>
          <img
                src={tree.img}
                alt=""
                width="200px"
                height="150px"
              ></img>
          <Button />
        </div>
      ))}
    </div>
  );
}

export default App;
