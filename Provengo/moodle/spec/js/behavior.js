// @provengo summon selenium
// @provengo summon constraints


bthread('studentMarkCourseAsStar', function () {
    let s1 = new SeleniumSession("studentSession").start(URLmoodle);
  sync({request:Event("End(LoginStudent)")}, LoginStudent(s1, {userName: 'gilstudent', password: 'Gilinoy2!'}));

  sync({request:Event("End(goToMyCourses)")}, goToMyCourses(s1));
    interrupt(Event("Start(deleteCourseAndContinue)"), function (){
      sync({request:Event("End(markCourseAsStar)")}, markCourseAsStar(s1));
  })
})

bthread('adminDeleteCourse', function () {
  let s = new SeleniumSession("adminSession").start(URLmoodle)
  sync({request:Event("End(LoginAdmin)")}, LoginAdmin(s, {userName: '80-55admin', password: 'Gilinoy1!'}));
  sync({request:Event("End(fromDashboardToManageCourses)")}, fromDashboardToManageCourses(s));
  sync({request:Event("End(deleteCourseAndContinue)")}, deleteCourseAndContinue(s));
})


bthread("MakeSureStudentDontMarkADeletedCourse", function() {

  sync({waitFor:Event("Start(deleteCourseAndContinue)")});
  sync({block:Event("Start(markCourseAsStar)")});
})

bthread("MakeSureStudentDontMarkADeletedCourse2", function() {

  sync({waitFor:Event("End(deleteCourseAndContinue)")});
  sync({waitFor:Event("End(goToMyCourses)")});
  sync({request:Event("Start(AssertCourseNotExists)")});
})

