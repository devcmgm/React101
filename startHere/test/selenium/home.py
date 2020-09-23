import time
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException

options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")
driver = webdriver.Chrome('./chromedriver', options=options)  # Optional argument, if not specified will search path.
driver.get('http://localhost:3000/');
time.sleep(3) # Let the user actually see something!
try:
  signin_button = driver.find_element_by_id('signin')
  signin_button.click()
  time.sleep(2) # Let the user actually see something!
  personFirstName = driver.find_element_by_id('xpersonFirstName')
  print("[SUCCESS]: Element Signin Button")
  pass
except NoSuchElementException as zerr:
  print("[FAILED]: " + str(zerr))

driver.close()
