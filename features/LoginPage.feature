Feature: Test Application

    @login @test1
    Scenario: Positive LogIn test
        Given I enter username as 'student'
        Then I enter password as 'Password123'
        And I click on submit button
        Then I validate header text as 'Logged In Successfully'
        And I validate sub-header text as 'Congratulations student. You successfully logged in!'
        Then I validate logout button
        And I validate page url as 'https://practicetestautomation.com/logged-in-successfully/'


    @login @test2
    Scenario: Negative username test
        Given I enter username as 'incorrectUser'
        Then I enter password as 'Password123'
        And I click on submit button
        Then I validate error message 'Your username is invalid!'


    @login @test3
    Scenario: Negative password test
        Given I enter username as 'student'
        Then I enter password as 'incorrectPassword'
        And I click on submit button
        Then I validate error message 'Your password is invalid!'
