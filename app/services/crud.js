// a crud services that do all the crud operation and it will be used as the base for all the services
// for other services (except crud) we'll create a new service file (text.js for exemple)

// create model
const create = (Model, data) => {
  const newObject = new Model({ ...data });

  return newObject
    .save()
    .then(res => res)
    .catch(error => {
      console.error("error in create op ", error);
      return null;
    });
};

// create many instance of same model
const createMany = (Model, data) => {
  return Model.insertMany(data)
    .then(res => res)
    .catch(error => {
      console.error("error in insertMany op ", error);
      return null;
    });
};

// find One model
const findOne = (
  Model,
  filter = {},
  selectors = "-createdAt -updatedAt -_id",
  options = {}
) => {
  return Model.findOne(filter, selectors, options)
    .then(res => res)
    .catch(() => {
      console.error("error in find One op ");
      return null;
    });
};

// find all models
const findAll = (
  Model,
  filter = {},
  selectors = "-createdAt -updatedAt -__v",
  options = {}
) => {
  return Model.find(filter, selectors, options)
    .then(res => res)
    .catch(error => {
      console.error("error in find All op ", error);
      return null;
    });
};

// update model
const update = (Model, query, data) => {
  return Model.update(query, data)
    .then(res => res)
    .catch(error => {
      console.error("error in update op ", error);
      return null;
    });
};

// update one model
const updateOne = (Model, query, data) => {
  return Model.updateOne(query, data)
    .then(res => res)
    .catch(error => {
      console.error("error in update op ", error);
      return null;
    });
};

// remove model
const remove = (Model, query) => {
  return Model.remove(query)
    .then(res => res)
    .catch(error => {
      console.error("error in remove op ", error);
      return null;
    });
};

const findPaginated = (Model, query, options) => {
  options.sort = options.sort || "createdAt";
  options.select = "-_id -createdAt -updatedAt -__v";
  return Model.paginate(query, options)
    .then(res => res)
    .catch(err => {
      console.error(err);
      return null;
    });
};
export default {
  create,
  findOne,
  findAll,
  update,
  updateOne,
  remove,
  createMany,
  findPaginated
};
