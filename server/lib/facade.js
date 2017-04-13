class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  create(input) {
    const schema = new this.Schema(input);
    return schema.save();
  }

  update(conditions, update) {
    return this.Schema
    .update(conditions, update, { new: true })
    .exec();
  }

  find(query) {
    if(query.category !== "none" && query.text !== ""){
      return this.Schema
      .find({
        $text: {
          $search: query.text
        },
        categories: query.category
      })
      .exec();
    } else if (query.category === "none" && query.text !== "") {
        return this.Schema
        .find({
          $text: {
            $search: query.text
          }
      })
      .exec();
    } else if (query.category !== "none" && query.text === "") {
        return this.Schema
        .find({categories: query.category})
        .exec();
    } else {
        return this.Schema
        .find()
        .exec();
    }
  }

  findOne(query) {
    return this.Schema
    .findOne(query)
    .exec();
  }

  findById(id) {
    return this.Schema
    .findById(id)
    .exec();
  }

  remove(id) {
    return this.Schema
    .findByIdAndRemove(id)
    .exec();
  }
}

module.exports = Facade;
