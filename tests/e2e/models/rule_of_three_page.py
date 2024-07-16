from playwright.sync_api import Page

class RuleOfThreePage:
    def __init__(self, page: Page):
        self.page = page
        self.box_input1 = page.locator("#box-1")
        self.box_input2 = page.locator("#box-2")
        self.box_input3 = page.locator("#box-3")
        self.result_box = page.locator("#result")
        self.calculate_button = page.locator("#calculate-button")
        self.clear_button = page.locator("#clear-button")
        self.message = page.locator("#message")
        
        
    def goto(self):
        self.page.goto("http://127.0.0.1:5500/index.html")
        
    def fill_input(self, n, value):
        if n == 1:
            self.box_input1.fill(value)
        elif n == 2:
            self.box_input2.fill(value)
        elif n == 3:
            self.box_input3.fill(value)
    
    def click_calculate(self):
        self.calculate_button.click()
        
    def click_clear(self):
        self.clear_button.click()