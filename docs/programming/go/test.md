# Go testing

All Go tests need to be in files ending with `_test.go`. Run `go help testflag` to see full list of all test flags available.

## Simple test function example
They all start with `Test`.

```go showLineNumbers
package main

import "testing"

func TestHello(t *testing.T) {
	got := Hello("Chris")
	want := "Hello, Chris"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
```

## [Test function with multiple subtests and a helper function](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/hello-world#hello-world...-again)

```go showLineNumbers
func TestHello(t *testing.T) {
	assertCorrectMessage := func(t testing.TB, got, want string) {
		t.Helper()
		if got != want {
			t.Errorf("got %q want %q", got, want)
		}
	}

	t.Run("saying hello to people", func(t *testing.T) {
		got := Hello("Chris")
		want := "Hello, Chris"
		assertCorrectMessage(t, got, want)
	})
	t.Run("empty string defaults to 'World'", func(t *testing.T) {
		got := Hello("")
		want := "Hello, World"
		assertCorrectMessage(t, got, want)
	})
}
```

## [Table Driven Tests](https://github.com/golang/go/wiki/TableDrivenTests)

Run the same tests with different inputs and expected outputs by using an array/a slice of struct containing input and expected output, then looping through them. Great example [here](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/structs-methods-and-interfaces#further-refactoring) with this important section:  
> Table driven tests can be a great item in your toolbox, but be sure that you have a need for the extra noise in the tests. They are a great fit when you wish to test various implementations of an interface, or if the data being passed in to a function has lots of different requirements that need testing.

```go showLineNumbers
func TestArea(t *testing.T) {
	areaTests := []struct {
		name    string
		shape   Shape
		hasArea float64
	}{
		{name: "Rectangle", shape: Rectangle{width: 12, height: 6}, hasArea: 72.0},
		{name: "Circle", shape: Circle{radius: 10}, hasArea: 314.1592653589793},
		{name: "Triangle", shape: Triangle{base: 12, height: 6}, hasArea: 36.0},
	}

	// using tt.name from the case to use it as the `t.Run` test name
	for _, tt := range areaTests {
		t.Run(tt.name, func(t *testing.T) {
			if tt.shape.area() != tt.hasArea {
				t.Errorf("%#v got %.2f, wanted %.2f", tt.name, tt.shape.area(), tt.hasArea)
			}
		})
	}
}
```

## Test for Errors

### Error checking

General tips

- When testing a function that may return an error, write test cases that check for scenarios when it returns `nil`, and when it returns an `error`.
- If a test returns an `error`, check against the `error` instead of the `string` message of the error. E.g. the first option below is much better than the second option.  

The below is **good**.

```go showLineNumbers
var ErrInsufficientFunds = errors.New("cannot withdraw, insufficient funds")

func (w *Wallet) Withdraw(b Bitcoin) error {
	if b > w.balance {
		return ErrInsufficientFunds
	}
	w.balance -= b
	return nil
}

func TestWallet(t *testing.T) {
	assertError := func(t testing.TB, got, want error) {
		t.Helper()
		if got == nil {
			t.Fatal("wanted an error but didn't get one")
		}
		if got != want {
			t.Errorf("got %q, wanted %q", got, want)
		}
	}

	t.Run("withdraw insufficient funds", func(t *testing.T) {
		startingBalance := Bitcoin(20)
		wallet := Wallet{startingBalance}
		err := wallet.Withdraw(Bitcoin(100))

		assertError(t, err, ErrInsufficientFunds)
		assertBalance(t, wallet, startingBalance)
	})
}
```

The below is **bad** because we are hardcoding the Error return string and the test will break if we reword the error (See [here](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#refactor-3) for more details)

```go showLineNumbers
func (w *Wallet) Withdraw(b Bitcoin) error {
	if b > w.balance {
		return errors.New("cannot withdraw, insufficient funds")
	}
	w.balance -= b
	return nil
}

func TestWallet(t *testing.T) {
	assertError := func(t testing.TB, got error, want string) {
		t.Helper()
		if got == nil {
			t.Fatal("wanted an error but didn't get one")
		}
		if got.Error() != want {
			t.Errorf("got %q, wanted %q", got, want)
		}
	}

	t.Run("withdraw insufficient funds", func(t *testing.T) {
		startingBalance := Bitcoin(20)
		wallet := Wallet{startingBalance}
		err := wallet.Withdraw(Bitcoin(100))

		assertError(t, err, "cannot withdraw, insufficient funds")
		assertBalance(t, wallet, startingBalance)
	})
}
```

### [Unchecked Error Handling](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#unchecked-errors)

When writing tests to check for error handling, it is easy to miss out any logic flow (e.g. when something is supposed to return an error, or when something is not supposed to return an error).  
To help find error handling flows that might have been missed, use `errcheck` to check for missing/untested error handling.

```bash
go install github.com/kisielk/errcheck@latest
errcheck .
```

Logic flow that get flagged out will look something like this. This means line 38 is not checking the error being returned.

```go showLineNumbers
wallet_test.go:38:18:   wallet.Withdraw(Bitcoin(10))
```

[This section from Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#unchecked-errors) explains it much better than me.

### Error Constants

Lifted from [here](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/maps#refactor-3).

```go showLineNumbers
const (
	ErrNotFound   = DictionaryErr("could not find the word you were looking for")
	ErrWordExists = DictionaryErr("cannot add word because it already exists")
)

type DictionaryErr string

func (e DictionaryErr) Error() string {
	return string(e)
}
```

### Dependency Injection and Mocking

As much as possible, functions should accept interfaces rather than concrete types. With that, it is possible to pass in different kinds of implementations including mocks to test the functionality.

The below shows an example where `Greet` takes in a `Writer` interface instead of printing to `stdout` which would be hard to test on. Using a `Writer` interface allows the function to return the output somewhere of choosing rather than only `stdout`.

More info [here](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/dependency-injection).

For mocking, see [here](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/mocking) for how different implementations of interfaces are passed into functions when running the program for real vs when running tests.

```go showLineNumbers
func main() {
	Greet(os.Stdout, "Elodie")
}

func Greet(writer io.Writer, name string) {
	fmt.Fprintf(writer, "Hello, %s", name)
}
```

```go showLineNumbers
func TestGreet(t *testing.T) {
	buffer := bytes.Buffer{}
	Greet(&buffer, "Chris")

	got := buffer.String()
	want := "Hello, Chris"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
```

## Test Related

### Test coverage

- Run `go test -cover` to check the [coverage](https://go.dev/blog/cover) of your code.
- Refer to [Unchecked error handling](#unchecked-error-handling) on how to lint for missing test coverage for error handling.

### [Examples](https://go.dev/blog/examples)
They all start with `Example`. Leaving out `// Output: <value>` results in the function being compiled but not executed. Code example will appear in `godoc`, improving readability of documentation. [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/integers#examples) has a great section explaining example test functions. Run `go test -v` to see the output of the example functions.

```go showLineNumbers
func ExampleAdd() {
	sum := Add(1, 5)
	fmt.Println(sum)
	// Output: 6
}
```

### [Benchmarking](https://pkg.go.dev/testing#hdr-Benchmarks)

They all start with `Benchmark`. Replace `Repeat("a")` with whatever you want to benchmark. [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/iteration#benchmarking) has yet another great section explaining benchmarking. Run `go test -bench=.` to run the benchmarks.

```go showLineNumbers
func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a")
	}
}
```
