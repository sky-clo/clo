Feature: Rome2Rio Search
  Test that the search functionality works on rome2rio.com

Scenario Outline: Searching Rome2Rio from the homepage
  Given that I am on the Rome2Rio homepage
  When I search from "<from>" to "<to>"
  Then the landing page title should contain "<from>" and "<to>"

  Examples:
  | from           | to        |
  | Miami          | Ibiza     |
  | Paris          | Berlin    |
  | London         | Edinburgh |
  | Tokyo          | Toronto   |
  | New York       | Dubrovnik |

# ----------------------------------------------------------------------------
# ALTERNATIVE SYNTAX FOR INDIVIDUAL SCENARIOS AS OPPOSED TO SCENARIO OUTLINES
# ----------------------------------------------------------------------------
# Feature: Rome2Rio Search
#  Test that the search functionality works on rome2rio.com
#
#  Scenario: Searching Rome2Rio from the homepage
#    Given I am on the Rome2Rio homepage
#    When I search from Miami to Ibiza
#    Then I should land on the correct results page