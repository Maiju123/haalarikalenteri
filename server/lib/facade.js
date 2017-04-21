var moment = require('moment');

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
    console.log("query date:", query.date)
    var queryObject = {}
    if (query.text !== "") {
      var text = {
        $text: {
          $search: query.text
        }
      }
      queryObject.$text = text.$text
    }

    if (query.category !== "none") {
      var category = {
        category: query.category
      }
      queryObject.categories = category.category
    }

    if (query.date !== "" && query.date !== undefined && query.date !== null) {
      var queryDate = moment(query.date)
      var queryDateYesterday = moment(query.date).subtract(1, 'days')
      var date = {
        date: {
          $gte: queryDateYesterday,
          $lte: queryDate
        }
      }
      queryObject.date = date.date
    }

    console.log("queryobject: ", queryObject)
    return this.Schema
    .find(queryObject)
    .exec();
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
