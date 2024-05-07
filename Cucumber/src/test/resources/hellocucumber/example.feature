Feature: A set of scenarios for testing the "example" module

  @Student
  Scenario Outline: Student defines course as starred
    Given Student is on Home Page
    When Student is logged in with "<Username>" and "<Password>"
    And Student defines course as starred
    Then Course successfully marked as starred

    Examples:
      | Username        | Password  |
      | gilstudent      | Gilinoy2! |


  @Teacher
  Scenario Outline: Teacher deletes the course
    Given Teacher is on Home Page
    When Teacher is logged in with "<Username>" and "<Password>"
    And Teacher deletes the course
    Then Course successfully deleted from Moodle

    Examples:
      | Username        | Password  |
      | 80-55admin      | Gilinoy1! |
