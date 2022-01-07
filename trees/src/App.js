import "./App.css";

function App() {
  let trees = [
    {
      name: "Oak",
      description:
        "An oak is a tree or shrub in the genus Quercus of the beech family, Fagaceae. There are approximately 500 extant species of oaks."
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
        </div>
      ))}
    </div>
  );
}

export default App;
