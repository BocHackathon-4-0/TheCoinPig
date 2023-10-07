from api_objects import api_timeout_obj
import requests
from datetime import datetime, timedelta
from api_settings import *

def getAccessToken():
    url = OATH_URL
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}

    # Parameters for the request
    params = {
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'grant_type': 'client_credentials',
        'scope': 'TPPOAuth2Security'
    }

        
    # Make the GET request
    response = requests.get(url, headers=headers, params=params)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        response_json = response.json()

        # Extract the access_token
        access_token = response_json.get('access_token')
        timeout = response_json.get('expires_in')
        timeout_datetime = datetime.now() + timedelta(seconds=timeout)
        access_token_obj = api_timeout_obj(timeout_datetime, access_token)


        return access_token_obj
    return response.status_code

def getAccountStatement(access_token_obj, account_id):
    if access_token_obj.expired():
        access_token_obj = getAccessToken()
    url = OATH_URL + f"v1/accounts/{account_id}/statement"
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token_obj.payload}',
        'subscriptionId': os.environ.get('SUBSCRIPTION_ID'),
        'originUserId': os.environ.get('ORIGIN_USER_ID'),
        'journeyId': 'a87043bf-aa57-4add-8bee-25dceaafb62b',
        'timeStamp': str(int(datetime.timestamp(datetime.now()))),
    }

    params = {
        'maxCount': '32766'
    }

    # Make the GET request
    response = requests.get(url, headers=headers, params=params)

    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        return response.json()
    return response.status_code

def getAccountBalance(access_token_obj, account_id):
    if access_token_obj.expired():
        access_token_obj = getAccessToken() 
    
    url = OATH_URL + f"v1/accounts/{account_id}/balance"
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {access_token_obj.payload}',
        'subscriptionId': os.environ.get('SUBSCRIPTION_ID'),
        'originUserId': os.environ.get('ORIGIN_USER_ID'),
        'journeyId': 'a87043bf-aa57-4add-8bee-25dceaafb62b',
        'timeStamp': str(int(datetime.timestamp(datetime.now()))),
    }

    # Make the GET request
    response = requests.get(url, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        return response.json()
    return response.status_code



