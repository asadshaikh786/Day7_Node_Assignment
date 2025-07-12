const express = require("express");
const app = express();
const PORT = 3000;

const students = [
  { id: 1, name: "Asad", course: "Node.js" },
  { id: 2, name: "Aman", course: "React" },
  { id: 3, name: "Sara", course: "Python" }
];

app.get("/student/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server chal raha hai at http://localhost:${PORT}`);
});
