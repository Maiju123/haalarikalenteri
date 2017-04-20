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
    // If query HAS category AND search term
    if(query.category !== "none" && query.text !== ""){
      return this.Schema
      .find({
        $text: {
          $search: query.text
        },
        categories: query.category
      })
      .exec();
      // If query has NO category but HAS A search term
    } else if (query.category === "none" && query.text !== "") {
        return this.Schema
        .find({
          $text: {
            $search: query.text
          }
      })
      .exec();
      // If query HAS category but NO search term
    } else if (query.category !== "none" && query.text === "") {
        return this.Schema
        .find({categories: query.category})
        .exec();
        // Otherwise search all
    } else {
        return this.Schema
        .find({
          date: {
            $gte: new Date("2017-04-22"),
            $lte: new Date("2017-04-23")
          }
        })
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
