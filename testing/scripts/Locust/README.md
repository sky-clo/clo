# Locust

This is the testing framework we will use for performance testing. The following script found in the directory is just an example, it will need to be modified.  

## Documentation

Documentation for Locust can be found here [Locust Doc](https://docs.locust.io/en/stable/)

## Installation

Assuming you have Python3 and pip3 downloaded on your machine execute the following:

### `pip3 install locust`

This will download the locust python module. Your aliases may be different. If you can't find pip3 alias try the following:
#### `python3 -m pip install locust`

##Running

To run the locust file make sure you are in the directory,make sure your file is called locustfile.py, make sure you have started the localhost or that the URL you are testing is alive and execute:
### `locust`

If you want to execute a locust file from a different directory or filename you need to execute the following:
### `locust -f locust_files/my_locust_file.py`

To be able to see the locust API you need to search for
### `(http://127.0.0.1:8089/)`

