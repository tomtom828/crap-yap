Message = new Mongo.Collection('messages');

Message.schema = new SimpleSchema({
  content: {
    type: String
  },
  // user_id: {
  //   type: String
  // }
})