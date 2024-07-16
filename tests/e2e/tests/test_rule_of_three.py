from time import sleep
import re
import pytest
from playwright.sync_api import Page, expect
from models.rule_of_three_page import RuleOfThreePage


def test_boundary(page: Page):
    
    rule_of_three = RuleOfThreePage(page)
    
    rule_of_three.goto()
    
    rule_of_three.fill_input(1, '0')
    rule_of_three.fill_input(2, '10')
    rule_of_three.fill_input(3, '5')
    
    rule_of_three.click_calculate()
    
    expect(rule_of_three.message).to_have_text('Fields cannot be zero or empty.')
    

def test_all_empty_fields(page: Page):
    
    rule_of_three = RuleOfThreePage(page)
    
    rule_of_three.goto()
    
    rule_of_three.click_calculate()
    
    expect(rule_of_three.message).to_have_text('Fields cannot be zero or empty.')
    
    
@pytest.mark.parametrize("box_input1, box_input2, box_input3, result", [
    ("2", "4", "1", "2"),
    ("3", "9", "2", "6"),
    ("5", "15", "3", "9"),
    ("7", "14", "2", "4"),
    ("8", "16", "4", "8"),
    ("6", "12", "3", "6"),
    ("10", "20", "5", "10"),
    ("9", "27", "3", "9"),
    ("12", "24", "6", "12"),
    ("4", "8", "2", "4"),
    ("1", "1000", "1", "1000"),   
    ("1000", "1", "1000", "1"),   
    ("1", "1", "1", "1"),         
    ("1000", "1000", "1000", "1000"), 
    ("1", "1000", "500", "500000"),   
    ("1000", "500", "1", "0.50"),   
    ("1", "500", "1000", "500000"), 
    ("2", "2", "1", "1"),         
    ("999", "999", "999", "999"), 
    ("2", "999", "1", "499.50"),
    ("-1", "1000", "1", "-1000"),
    ("1", "-1000", "1", "-1000"),
    ("1", "1000", "-1", "-1000")
])
def test_calculation(page: Page, box_input1, box_input2, box_input3, result):
    rule_of_three = RuleOfThreePage(page)
    
    rule_of_three.goto()
    
    rule_of_three.fill_input(1, box_input1)
    rule_of_three.fill_input(2, box_input2)
    rule_of_three.fill_input(3, box_input3)
    
    rule_of_three.click_calculate()
    
    expect(rule_of_three.result_box).to_have_value(result)