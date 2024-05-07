/* @provengo summon selenium */

function LoginStudent(session, e){
  sync({request:Event("Start(LoginStudent)")})

  session.click(xpaths.homePageWindow.loginButton)
  session.writeText(xpaths.loginWindow.userInput, e.userName)
  session.writeText(xpaths.loginWindow.passwordInput, e.password)
  session.click(xpaths.loginWindow.loginButton)

}

function LoginAdmin(session, e){
  sync({request:Event("Start(LoginAdmin)")})
  session.click(xpaths.homePageWindow.loginButton)
  session.writeText(xpaths.loginWindow.userInput, e.userName)
  session.writeText(xpaths.loginWindow.passwordInput, e.password)
  session.click(xpaths.loginWindow.loginButton)

}

function goToMyCourses(session, e){
  sync({request:Event("Start(goToMyCourses)")})
  session.click(xpaths.dashboardWindow.myCoursesButton)
}


function markCourseAsStar(session, e){
  sync({request:Event("Start(markCourseAsStar)")})
  // session.click(xpaths.coursesWindow.dotCourseButton)
  // session.click(xpaths.coursesWindow.starButton)
}

function AssertCourseNotExists(session, e){
    session.waitForVisibility('/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div/div/h5')
}

function studentLogout(session, e){
  session.click(xpaths.coursesWindow.profileButton)
  session.click(xpaths.coursesWindow.logoutButton)

}

function fromDashboardToManageCourses(session, e){
  sync({request:Event("Start(fromDashboardToManageCourses)")})
  session.click(xpaths.dashboardWindow.setAdministrationButton)
  session.click(xpaths.siteAdministrationWindow.coursesButton)
  session.click(xpaths.siteAdministrationCoursesWindow.manageCourses)

}

function deleteCourseAndContinue(session, e){
  sync({request:Event("Start(deleteCourseAndContinue)")})

  // session.click(xpaths.manageCoursesWindow.deleteCourseButton)
  // session.click(xpaths.confirmDeleteWindow.confirmDeleteCourseButton)
  // session.scrollToElement(xpaths.courseDeletedSuccessfullyWindow.continueButton)
  // session.click(xpaths.courseDeletedSuccessfullyWindow.continueButton)

}

function teacherLogout(session, e){
  session.click(xpaths.dashboardWindow.profileButton)
  session.click(xpaths.dashboardWindow.logoutButton)
}



