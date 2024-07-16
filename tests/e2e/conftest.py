# conftest.py
import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '.')))


import pytest
from playwright.sync_api import sync_playwright
from playwright.sync_api import Page, expect


@pytest.fixture(scope="session")
def browser():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        yield browser
        browser.close()

@pytest.fixture(scope="function")
def page(browser):
    page = browser.new_page()
    yield page
    page.close()