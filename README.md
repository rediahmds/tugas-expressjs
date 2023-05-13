# Express.js Assignment

The assignment is to create an endpoint that can handle GET request and POST request to an endpoint, `/biodata`.

For example, the GET request below

`GET /biodata?name=susi&tempat-lahir=wonosobo&tanggal-lahir=12081990&alamat=Jl.%20Gatot%20Subroto%20No.%2006`

should return something like this:

```JSON
{
    "nama": "susi",
    "alamat": "Jl. Gatot Subroto No. 06",
    "tempat-lahir": "wonosobo",
    "tanggal-lahir": "12081990"
}
```

## Solving the problem

To mock a database, an array is used along with a default biodata.Any POST and GET request will be utilizing the array.

## Doing a POST request

There are rules for doing a POST request:

- The request should have these properties listed: `nama`, `alamat`, `tempat_lahir`, and `tanggal_lahir`. It will fail otherwise.
- The property of `nama` cannot be an empty string

> NOTE: Use Postman or similar tool for a POST request

## Doing a GET request

Leaving the query empty will trigger the server to send the whole data in the database.

### Querying with a certain property

The server has the ability to find a result with only a few properties if the database
