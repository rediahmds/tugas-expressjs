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
