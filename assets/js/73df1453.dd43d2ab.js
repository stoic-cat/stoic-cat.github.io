"use strict";(self.webpackChunkstoic_cat=self.webpackChunkstoic_cat||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="Go testing",s={unversionedId:"programming/go/test",id:"programming/go/test",title:"Go testing",description:"All Go tests need to be in files ending with _test.go. Run go help testflag to see full list of all test flags available.",source:"@site/docs/programming/go/test.md",sourceDirName:"programming/go",slug:"/programming/go/test",permalink:"/programming/go/test",draft:!1,editUrl:"https://github.com/stoic-cat/stoic-cat.github.io/tree/main/docs/programming/go/test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/programming/go/cli"},next:{title:"Technology",permalink:"/technology/"}},l={},u=[{value:"Simple test function example",id:"simple-test-function-example",level:2},{value:"Test function with multiple subtests and a helper function",id:"test-function-with-multiple-subtests-and-a-helper-function",level:2},{value:"Table Driven Tests",id:"table-driven-tests",level:2},{value:"Test for Errors",id:"test-for-errors",level:2},{value:"Error checking",id:"error-checking",level:3},{value:"Unchecked Error Handling",id:"unchecked-error-handling",level:3},{value:"Error Constants",id:"error-constants",level:3},{value:"Dependency Injection and Mocking",id:"dependency-injection-and-mocking",level:3},{value:"Test Related",id:"test-related",level:2},{value:"Test coverage",id:"test-coverage",level:3},{value:"Examples",id:"examples",level:3},{value:"Benchmarking",id:"benchmarking",level:3}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-testing"},"Go testing"),(0,a.kt)("p",null,"All Go tests need to be in files ending with ",(0,a.kt)("inlineCode",{parentName:"p"},"_test.go"),". Run ",(0,a.kt)("inlineCode",{parentName:"p"},"go help testflag")," to see full list of all test flags available."),(0,a.kt)("h2",{id:"simple-test-function-example"},"Simple test function example"),(0,a.kt)("p",null,"They all start with ",(0,a.kt)("inlineCode",{parentName:"p"},"Test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package main\n\nimport "testing"\n\nfunc TestHello(t *testing.T) {\n    got := Hello("Chris")\n    want := "Hello, Chris"\n\n    if got != want {\n        t.Errorf("got %q want %q", got, want)\n    }\n}\n')),(0,a.kt)("h2",{id:"test-function-with-multiple-subtests-and-a-helper-function"},(0,a.kt)("a",{parentName:"h2",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/hello-world#hello-world...-again"},"Test function with multiple subtests and a helper function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func TestHello(t *testing.T) {\n    assertCorrectMessage := func(t testing.TB, got, want string) {\n        t.Helper()\n        if got != want {\n            t.Errorf("got %q want %q", got, want)\n        }\n    }\n\n    t.Run("saying hello to people", func(t *testing.T) {\n        got := Hello("Chris")\n        want := "Hello, Chris"\n        assertCorrectMessage(t, got, want)\n    })\n    t.Run("empty string defaults to \'World\'", func(t *testing.T) {\n        got := Hello("")\n        want := "Hello, World"\n        assertCorrectMessage(t, got, want)\n    })\n}\n')),(0,a.kt)("h2",{id:"table-driven-tests"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/golang/go/wiki/TableDrivenTests"},"Table Driven Tests")),(0,a.kt)("p",null,"Run the same tests with different inputs and expected outputs by using an array/a slice of struct containing input and expected output, then looping through them. Great example ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/structs-methods-and-interfaces#further-refactoring"},"here")," with this important section:  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Table driven tests can be a great item in your toolbox, but be sure that you have a need for the extra noise in the tests. They are a great fit when you wish to test various implementations of an interface, or if the data being passed in to a function has lots of different requirements that need testing.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func TestArea(t *testing.T) {\n    areaTests := []struct {\n        name    string\n        shape   Shape\n        hasArea float64\n    }{\n        {name: "Rectangle", shape: Rectangle{width: 12, height: 6}, hasArea: 72.0},\n        {name: "Circle", shape: Circle{radius: 10}, hasArea: 314.1592653589793},\n        {name: "Triangle", shape: Triangle{base: 12, height: 6}, hasArea: 36.0},\n    }\n\n    // using tt.name from the case to use it as the `t.Run` test name\n    for _, tt := range areaTests {\n        t.Run(tt.name, func(t *testing.T) {\n            if tt.shape.area() != tt.hasArea {\n                t.Errorf("%#v got %.2f, wanted %.2f", tt.name, tt.shape.area(), tt.hasArea)\n            }\n        })\n    }\n}\n')),(0,a.kt)("h2",{id:"test-for-errors"},"Test for Errors"),(0,a.kt)("h3",{id:"error-checking"},"Error checking"),(0,a.kt)("p",null,"General tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When testing a function that may return an error, write test cases that check for scenarios when it returns ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),", and when it returns an ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"."),(0,a.kt)("li",{parentName:"ul"},"If a test returns an ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", check against the ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," instead of the ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," message of the error. E.g. the first option below is much better than the second option.  ")),(0,a.kt)("p",null,"The below is ",(0,a.kt)("strong",{parentName:"p"},"good"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'var ErrInsufficientFunds = errors.New("cannot withdraw, insufficient funds")\n\nfunc (w *Wallet) Withdraw(b Bitcoin) error {\n    if b > w.balance {\n        return ErrInsufficientFunds\n    }\n    w.balance -= b\n    return nil\n}\n\nfunc TestWallet(t *testing.T) {\n    assertError := func(t testing.TB, got, want error) {\n        t.Helper()\n        if got == nil {\n            t.Fatal("wanted an error but didn\'t get one")\n        }\n        if got != want {\n            t.Errorf("got %q, wanted %q", got, want)\n        }\n    }\n\n    t.Run("withdraw insufficient funds", func(t *testing.T) {\n        startingBalance := Bitcoin(20)\n        wallet := Wallet{startingBalance}\n        err := wallet.Withdraw(Bitcoin(100))\n\n        assertError(t, err, ErrInsufficientFunds)\n        assertBalance(t, wallet, startingBalance)\n    })\n}\n')),(0,a.kt)("p",null,"The below is ",(0,a.kt)("strong",{parentName:"p"},"bad")," because we are hardcoding the Error return string and the test will break if we reword the error (See ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#refactor-3"},"here")," for more details)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func (w *Wallet) Withdraw(b Bitcoin) error {\n    if b > w.balance {\n        return errors.New("cannot withdraw, insufficient funds")\n    }\n    w.balance -= b\n    return nil\n}\n\nfunc TestWallet(t *testing.T) {\n    assertError := func(t testing.TB, got error, want string) {\n        t.Helper()\n        if got == nil {\n            t.Fatal("wanted an error but didn\'t get one")\n        }\n        if got.Error() != want {\n            t.Errorf("got %q, wanted %q", got, want)\n        }\n    }\n\n    t.Run("withdraw insufficient funds", func(t *testing.T) {\n        startingBalance := Bitcoin(20)\n        wallet := Wallet{startingBalance}\n        err := wallet.Withdraw(Bitcoin(100))\n\n        assertError(t, err, "cannot withdraw, insufficient funds")\n        assertBalance(t, wallet, startingBalance)\n    })\n}\n')),(0,a.kt)("h3",{id:"unchecked-error-handling"},(0,a.kt)("a",{parentName:"h3",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#unchecked-errors"},"Unchecked Error Handling")),(0,a.kt)("p",null,"When writing tests to check for error handling, it is easy to miss out any logic flow (e.g. when something is supposed to return an error, or when something is not supposed to return an error).",(0,a.kt)("br",{parentName:"p"}),"\n","To help find error handling flows that might have been missed, use ",(0,a.kt)("inlineCode",{parentName:"p"},"errcheck")," to check for missing/untested error handling."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/kisielk/errcheck@latest\nerrcheck .\n")),(0,a.kt)("p",null,"Logic flow that get flagged out will look something like this. This means line 38 is not checking the error being returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},"wallet_test.go:38:18:   wallet.Withdraw(Bitcoin(10))\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors#unchecked-errors"},"This section from Learn Go with Tests")," explains it much better than me."),(0,a.kt)("h3",{id:"error-constants"},"Error Constants"),(0,a.kt)("p",null,"Lifted from ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/maps#refactor-3"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'const (\n    ErrNotFound   = DictionaryErr("could not find the word you were looking for")\n    ErrWordExists = DictionaryErr("cannot add word because it already exists")\n)\n\ntype DictionaryErr string\n\nfunc (e DictionaryErr) Error() string {\n    return string(e)\n}\n')),(0,a.kt)("h3",{id:"dependency-injection-and-mocking"},"Dependency Injection and Mocking"),(0,a.kt)("p",null,"As much as possible, functions should accept interfaces rather than concrete types. With that, it is possible to pass in different kinds of implementations including mocks to test the functionality."),(0,a.kt)("p",null,"The below shows an example where ",(0,a.kt)("inlineCode",{parentName:"p"},"Greet")," takes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Writer")," interface instead of printing to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," which would be hard to test on. Using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Writer")," interface allows the function to return the output somewhere of choosing rather than only ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout"),"."),(0,a.kt)("p",null,"More info ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/dependency-injection"},"here"),"."),(0,a.kt)("p",null,"For mocking, see ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/mocking"},"here")," for how different implementations of interfaces are passed into functions when running the program for real vs when running tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func main() {\n    Greet(os.Stdout, "Elodie")\n}\n\nfunc Greet(writer io.Writer, name string) {\n    fmt.Fprintf(writer, "Hello, %s", name)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func TestGreet(t *testing.T) {\n    buffer := bytes.Buffer{}\n    Greet(&buffer, "Chris")\n\n    got := buffer.String()\n    want := "Hello, Chris"\n\n    if got != want {\n        t.Errorf("got %q want %q", got, want)\n    }\n}\n')),(0,a.kt)("h2",{id:"test-related"},"Test Related"),(0,a.kt)("h3",{id:"test-coverage"},"Test coverage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"go test -cover")," to check the ",(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/cover"},"coverage")," of your code."),(0,a.kt)("li",{parentName:"ul"},"Refer to ",(0,a.kt)("a",{parentName:"li",href:"#unchecked-error-handling"},"Unchecked error handling")," on how to lint for missing test coverage for error handling.")),(0,a.kt)("h3",{id:"examples"},(0,a.kt)("a",{parentName:"h3",href:"https://go.dev/blog/examples"},"Examples")),(0,a.kt)("p",null,"They all start with ",(0,a.kt)("inlineCode",{parentName:"p"},"Example"),". Leaving out ",(0,a.kt)("inlineCode",{parentName:"p"},"// Output: <value>")," results in the function being compiled but not executed. Code example will appear in ",(0,a.kt)("inlineCode",{parentName:"p"},"godoc"),", improving readability of documentation. ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/integers#examples"},"Learn Go with Tests")," has a great section explaining example test functions. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"go test -v")," to see the output of the example functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},"func ExampleAdd() {\n    sum := Add(1, 5)\n    fmt.Println(sum)\n    // Output: 6\n}\n")),(0,a.kt)("h3",{id:"benchmarking"},(0,a.kt)("a",{parentName:"h3",href:"https://pkg.go.dev/testing#hdr-Benchmarks"},"Benchmarking")),(0,a.kt)("p",null,"They all start with ",(0,a.kt)("inlineCode",{parentName:"p"},"Benchmark"),". Replace ",(0,a.kt)("inlineCode",{parentName:"p"},'Repeat("a")')," with whatever you want to benchmark. ",(0,a.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/iteration#benchmarking"},"Learn Go with Tests")," has yet another great section explaining benchmarking. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"go test -bench=.")," to run the benchmarks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func BenchmarkRepeat(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        Repeat("a")\n    }\n}\n')))}g.isMDXComponent=!0}}]);