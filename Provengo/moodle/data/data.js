/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URLmoodle = 'http://localhost/';

const xpaths = {
  homePageWindow: {
    loginButton: '//*[@id=\"usernavigation\"]/div/div/span/a',
  },
  loginWindow: {
    userInput: '//*[@id=\"username\"]',
    passwordInput: '//*[@id=\"password\"]',
    loginButton: '//*[@id=\"loginbtn\"]'
  },
  dashboardWindow: {
    myCoursesButton: '/html/body/div[2]/nav/div[1]/nav/ul/li[3]/a',
    setAdministrationButton: '/html/body/div[2]/nav/div[1]/nav/ul/li[4]/a',
    profileButton: '/html/body/div[2]/nav/div[2]/div[3]/div/div/a',
    logoutButton: '/html/body/div[2]/nav/div[2]/div[3]/div/div/div/div/div/div/a[7]'
  },
  coursesWindow: {
    dotCourseButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/div/div/button/i',
    starButton: '/html/body/div[2]/div[3]/div/div[2]/div/section/div/aside/section/div/div/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/div/div/div/a[1]',
    profileButton: '/html/body/div[2]/nav/div[2]/div[3]/div/div/a',
    logoutButton: '/html/body/div[2]/nav/div[2]/div[3]/div/div/div/div/div/div/a[7]'
  },
  siteAdministrationWindow: {
    coursesButton: '/html/body/div[2]/div[3]/div/div[2]/nav/ul/li[3]/a'
  },
  siteAdministrationCoursesWindow: {
    manageCourses: '/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div[3]/div/div[1]/div[2]/ul/li[1]/a'
  },
  manageCoursesWindow: {
    deleteCourseButton: '/html/body/div[4]/div[3]/div/div[3]/div/section/div/form/div[2]/div[2]/div/div/ul/li/div/div[3]/span/a[3]/i'
  },
  confirmDeleteWindow: {
    confirmDeleteCourseButton: '/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div/div[3]/div/div[2]/form/button'
  },
  courseDeletedSuccessfullyWindow: {
    continueButton: '/html/body/div[2]/div[3]/div/div[3]/div/section/div/div/div[15]/form/button'
  }

}
