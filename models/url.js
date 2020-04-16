const Schema = mongoose.Schema;
 
const URL = new Schema({
  longURL: String,
  shortURL: String
});