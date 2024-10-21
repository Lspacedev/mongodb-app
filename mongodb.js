db = connect("mongodb://localhost/Codetribe");
db.Facilitators.insertOne({ name: "Vukona", location: "TIH", course: "React" });
db.Projects.insertOne({ name: "Tshepo", course: "React", lesson: "MongoDb" });
db.Trainees.insertOne({
  name: "Tshepo",
  location: "TIH",
  facilitator: "Vukona",
});
