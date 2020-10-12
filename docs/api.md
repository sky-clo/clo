# 📖 API Documentation

## Get Popular Locations

### Request

`GET /locations`

### Response

#### 200 Success

```json
{
  "locations": [
    {
      "id": "1",
      "name": "London",
      "country": "United Kingdom",
      "description": "Big ben goes bong",
      "weather": "Sunny",
      "shows": ["Sherlock Holmes", "James Bond"],
      "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
    }
  ]
}
```

## Get a city's information

### Request

`GET /locations/{city}`

### Response

#### 200 Success

```json
{
  "id": "1",
  "name": "London",
  "country": "United Kingdom",
  "description": "Big ben goes bong"
}
```

#### 404 Not Found

```json
{
  "error": "city not found"
}
```

## Get a city's information given a show

### Request

`GET /locations/{city}/show/{show}`

### Response

#### 200 Success

```json
{
  "locations": [
    {
      "id": "1",
      "name": "London",
      "country": "United Kingdom",
      "description": "Big ben goes bong",
      "weather": "Sunny",
      "shows": ["Sherlock Holmes", "James Bond"],
      "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
    }
  ]
}
```

#### 404 Not Found

```json
{
  "error": "city not found"
}
```

## Search Flights

### Requests

`GET /flights?from={city}&to={city}`

### Response

```json
{
  "flights": [
    {
      "id": "1",
      "code": "BA 98",
      "date": "2020-01-01T12:00:00",
      "from": "London Stansted",
      "to": "Split",
      "duration": 120
    }
  ]
}
```

## Create a trip

### Request

`POST /trips`

```json
{
  "from": "london",
  "to": "dubrovnik",
  "date": "2020-01-01T12:00:00",
  "flightCode": "BA 98",
  "people": [
    {
      "firstName": "John",
      "lastName": "Smith",
      "dateOfBirth": "2020-01-01",
      "passport_number": "123456789"
    }
  ],
  "payment": {
    "accountName": "Mr John Smith",
    "accountNumber": "12345678",
    "sortCode": "01-01-01",
    "cvv": "123"
  }
}
```

### Response

#### 200 Success

```json
{
  "id": "1",
  "from": "london",
  "to": "dubrovnik",
  "date": "2020-01-01T12:00:00",
  "flightCode": "BA 98",
  "people": [
    {
      "id": "1",
      "firstName": "John",
      "lastName": "Smith",
      "dateOfBirth": "2020-01-01",
      "passport_number": "123456789"
    }
  ],
  "payment": {
    "accountName": "Mr John Smith",
    "accountNumber": "12345678",
    "sortCode": "01-01-01",
    "cvv": "123"
  }
}
```
