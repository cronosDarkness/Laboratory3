Feature: The internet website

    Scenario: As user, I can log into the secure area

    Given I am on the "login" page
    When I login with "<username>" and "<password>"
    Then I should see a message saying "message"

    Examples:
        | username | password             | message |
        | tomsmith | SuperSecretPassword! | You logged into a secure area! |
        | foobar   | barfoo               | Your username is invalid! |

