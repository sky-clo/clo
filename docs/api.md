# 📖 API Documentation

## GET /locations

Fetches all locations, sorted in popularity

### Response

#### 200 Success

```json
{
    locations: [
        {
            "id": 1,
            "name": "London"
            "country": "United Kingdom",
            "description": "Big ben goes bong",
        }
    ]
}
```

## GET /locations/{city}

Get a city's information

### Response

#### 200 Success

```json
{
    "id": 1,
    "name": "London"
    "country": "United Kingdom",
    "description": "Big ben goes bong",
}
```

#### 404 Not Found

```json
{
  "error": "city not found"
}
```

## GET /flights?from={city}&to={city}

Search flights from one location to another

### Response

```json
{
  "flights": [
    {
      "id": 1,
      "code": "BA 98",
      "date": "2020-01-01T12:00:00",
      "from": "London Stansted",
      "to": "Split",
      "duration": 120
    }
  ]
}
```

## POST /trips

Create a trip from one location to another

### Request

```json
{
    from: "london",
    to: "dubrovnik",
    date: "2020-01-01T12:00:00"
    flightCode: "BA 98",
    people: [
        {
            "firstName": "John",
            "lastName": "Smith",
            "dateOfBirth": "2020-01-01",
            "passport_number": "123456789"
        }
    ],
    payment: {
        "accountName": "Mr John Smith",
        "accountNumber": "12345678",
        "sortCode": "01-01-01",
        "cvv": "123"
    }
}
```
