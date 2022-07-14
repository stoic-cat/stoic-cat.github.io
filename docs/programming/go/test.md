# Go testing

All Go tests need to be in files ending with `_test.go`. Run `go help testflag` to see full list of all test flags available

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

## [Example function](https://go.dev/blog/examples)
They all start with `Example`. Leaving out `// Output: <value>` results in the function being compiled but not executed. Code example will appear in `godoc`, improving readability of documentation. [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/integers#examples) has a great section explaining example test functions. Run `go test -v` to see the output of the example functions.

```go showLineNumbers
func ExampleAdd() {
	sum := Add(1, 5)
	fmt.Println(sum)
	// Output: 6
}
```

## [Benchmarking](https://pkg.go.dev/testing#hdr-Benchmarks)

They all start with `Benchmark`. Replace `Repeat("a")` with whatever you want to benchmark. [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/iteration#benchmarking) has yet another great section explaining benchmarking. Run `go test -bench=.` to run the benchmarks.

```go showLineNumbers
func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a")
	}
}
```

## [Test coverage](https://go.dev/blog/cover)

Run `go test -cover` to check the coverage of your code.

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
