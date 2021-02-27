const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  // GET /me/stored/courses

  storedCourse(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
      ([courses, deletedCount]) =>
        res.render("me/storedCourses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        })
    ).catch;
    // Course.countDocumentsDeleted()
    //   .then((deletedCount) => {
    //     console.log(deletedCount);
    //   })
    //   .catch(next);
    // Course.find({}).then((courses) =>
    //   res
    //     .render("me/storedCourses", {
    //       courses: multipleMongooseToObject(courses),
    //     })
    //     .catch(next)
    // );
  }
  // GET /me/trash/courses
  trashCourse(req, res, next) {
    Course.findDeleted({}).then((courses) =>
      res
        .render("me/trashCourses", {
          courses: multipleMongooseToObject(courses),
        })
        .catch(next)
    );
  }
}
module.exports = new MeController();
