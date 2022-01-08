import "./App.css";

function App() {
  let trees = [
    {
      name: "Oak",
      description:
        "An oak is a tree or shrub in the genus Quercus of the beech family, Fagaceae. There are approximately 500 extant species of oaks.",
      img: 
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FQuercus_alba&psig=AOvVaw3DU3ogcUzO2iSYhenKD84x&ust=1641731117011000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjAl5OTovUCFQAAAAAdAAAAABAD"
    },

    {
      name: "Silver Birch",
      description:
        "The silver birch is a medium-sized deciduous tree that owes its common name to the white peeling bark on the trunk",
    },

    {
      name: "Ash",
      description:
        "The young tree has greyish bark, which is smooth. As the tree becomes older, the bark becomes grey/brown and creased",
    },

    {
      name: "Conifer",
      description:
        "Conifers are, most simply, woody plants. There are about 630 species.",
    },

    {
      name: "Maple",
      description:
        "Maples are versatile trees that tolerate a range of soils and sites with light conditions from full sun to partial shade",
    },
  ];

  return (
    <div className="container">
      {trees.map((tree) => (
        <div key={tree.name} className="content">
          <p>{tree.name}</p>
          <p>{tree.description}</p>
          <img
                src={tree.img}
                alt=""
                width="100px"
                height="100px"
              ></img>
        </div>
      ))}
    </div>
  );
}

export default App;
