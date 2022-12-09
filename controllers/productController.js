const { elasticClient } = require("../utils/SearchService");

var products = [
  {
    id: 1,
    title: "Shoe",
    description: "Adidas",
  },
  {
    id: 2,
    title: "Reebok Socks",
    description: "Looks good with shoe",
  },
];

const saveProduct = async (req, res) => {
  elasticClient.index({
    index: "product",
    body: req.body,
  });

  const { title, description } = req.body;

  products.push({
    title,
    description,
  });

  return res.status(201).json({ message: "Success", data: [] });
};

const getProducts = async (req, res) => {
  let query = {
    index: "products",
    id: req.params.id,
  };

  elasticClient
    .get(query)
    .then((response) => {
      return res.status(200).json({ response });
    })
    .catch((e) => console.log(e));
};

module.exports = { saveProduct, getProducts };
