const Schema = mongoose.Schema;
 
const urlSchema = new Schema({
  longURL: String,
  shortURL: String
});

module.exports = mongoose.model("URL", urlSchema)