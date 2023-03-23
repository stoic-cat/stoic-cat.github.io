# net/http

Notes on Golang's `net/http` standard library, specifically parts related to the http client.
Go version: [go1.19.2](https://github.com/golang/go/releases/tag/go1.19.2) (because this is what is installed on my machine)

## Objective

Understand parts of the code related to http client, how the different interfaces, structs, implementations etc are designed and grouped/segregated. Start from tracing a `http.Get` command.

## Findings


| Interface    | Struct    | Implementation   | Notes                                                                                                         |
| -------------- | ----------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| -            | Client    | DefaultClient    | `net/http/client.go` High level client interface.                                                             |
| RoundTripper | Transport | DefaultTransport | `net/http/transport.go` Low level implementation.                                                             |
| CookieJar    | Jar       | -                | `net/http/jar.go` Manages storage and use of cookies. Struct/Implementation is in `net/http/cookiejar/jar.go` |
| -            | Request   | -                | `net/http/request.go` Representation of HTTP request                                                          |
| -            | Response  | -                | `net/http/response.go` Representation of HTTP response                                                        |
| -            | URL       | -                | `net/url/url.go` Representation of a URL                                                                      |

### Client

1. Calling function `http.Get` returns `DefaultClient.Get`
2. `Client.Get`
   1. creates a new GET request with `NewRequest` function
   2. runs `Client.Do` passing in request
3. `Client.Do` (calls `Client.do`)
   1. Initialize some stuff e.g. error handler function
   2. Infinite for loop
      1. to handle HTTP redirects (add redirects to stack, copy headers to next request, etc)
      2. calls `Clien.send` to send request and get response
      3. go through loop until `shouldRedirect` is no longer true
4. `Client.send`
   1. Adds cookies to request if jar is not empty
   2. Calls the `send` function
   3. Update jar with cookie values if response has cookies
5. `send`
   1. Does a couple of stuff
      1. initializing headers if it isn't
      2. populate `Authorization` header if `URL` has `Userinfo`
   2. Calls `RoundTripper.RoundTrip` with the request

### RoundTripper

To do

## Rabbit holes to explore

- Transport
- Cookie
- Request
- Response
- Header
- URL

## Links

- https://mostafa.dev/how-does-go-make-an-http-request-19a0dd40a9c5
