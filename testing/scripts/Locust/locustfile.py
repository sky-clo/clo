import time
from locust import HttpUser, task, between

class BrowserUser(HttpUser):
	wait_time = between(1,2)

	@task(10)
	def index_page(self):
		self.client.get("")

	@task(6)
	def sign_in_page(self):
		self.client.get("sign-in")

	@task(3)
	def create_an_account_page(self):
		self.client.get("create-an-account")

	@task(2)
	def get_location_page(self):
		list_of_cities = ["London", "Split", "Moscow", "Madrid"]
		for city in list_of_cities:
			self.client.get("location/%s" % city)