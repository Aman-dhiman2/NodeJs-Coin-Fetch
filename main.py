import requests

url = "https://static.coinpaper.io/api/coins.json"

payload={}
headers = {}

#response = requests.request("GET", url, headers=headers, data=payload)
response = requests.get(url)

print(response.text)