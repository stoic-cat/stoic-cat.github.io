"use strict";(self.webpackChunkstoic_cat=self.webpackChunkstoic_cat||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Go testing",s={unversionedId:"programming/go/test",id:"programming/go/test",title:"Go testing",description:"All Go tests need to be in files ending with _test.go. Run go help testflag to see full list of all test flags available.",source:"@site/docs/programming/go/test.md",sourceDirName:"programming/go",slug:"/programming/go/test",permalink:"/programming/go/test",draft:!1,editUrl:"https://github.com/stoic-cat/stoic-cat.github.io/tree/main/docs/programming/go/test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/programming/go/cli"}},l={},p=[{value:"Simple test function example",id:"simple-test-function-example",level:2},{value:"Test function with multiple subtests and a helper function",id:"test-function-with-multiple-subtests-and-a-helper-function",level:2},{value:"Table Driven Tests",id:"table-driven-tests",level:2},{value:"Test Related",id:"test-related",level:2},{value:"Test coverage",id:"test-coverage",level:3},{value:"Examples",id:"examples",level:3},{value:"Benchmarking",id:"benchmarking",level:3}],u={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go-testing"},"Go testing"),(0,r.kt)("p",null,"All Go tests need to be in files ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"_test.go"),". Run ",(0,r.kt)("inlineCode",{parentName:"p"},"go help testflag")," to see full list of all test flags available."),(0,r.kt)("h2",{id:"simple-test-function-example"},"Simple test function example"),(0,r.kt)("p",null,"They all start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package main\n\nimport "testing"\n\nfunc TestHello(t *testing.T) {\n    got := Hello("Chris")\n    want := "Hello, Chris"\n\n    if got != want {\n        t.Errorf("got %q want %q", got, want)\n    }\n}\n')),(0,r.kt)("h2",{id:"test-function-with-multiple-subtests-and-a-helper-function"},(0,r.kt)("a",{parentName:"h2",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/hello-world#hello-world...-again"},"Test function with multiple subtests and a helper function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func TestHello(t *testing.T) {\n    assertCorrectMessage := func(t testing.TB, got, want string) {\n        t.Helper()\n        if got != want {\n            t.Errorf("got %q want %q", got, want)\n        }\n    }\n\n    t.Run("saying hello to people", func(t *testing.T) {\n        got := Hello("Chris")\n        want := "Hello, Chris"\n        assertCorrectMessage(t, got, want)\n    })\n    t.Run("empty string defaults to \'World\'", func(t *testing.T) {\n        got := Hello("")\n        want := "Hello, World"\n        assertCorrectMessage(t, got, want)\n    })\n}\n')),(0,r.kt)("h2",{id:"table-driven-tests"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/golang/go/wiki/TableDrivenTests"},"Table Driven Tests")),(0,r.kt)("p",null,"Run the same tests with different inputs and expected outputs by using an array/a slice of struct containing input and expected output, then looping through them. Great example ",(0,r.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/structs-methods-and-interfaces#further-refactoring"},"here")," with this important section:  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Table driven tests can be a great item in your toolbox, but be sure that you have a need for the extra noise in the tests. They are a great fit when you wish to test various implementations of an interface, or if the data being passed in to a function has lots of different requirements that need testing.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func TestArea(t *testing.T) {\n    areaTests := []struct {\n        name    string\n        shape   Shape\n        hasArea float64\n    }{\n        {name: "Rectangle", shape: Rectangle{width: 12, height: 6}, hasArea: 72.0},\n        {name: "Circle", shape: Circle{radius: 10}, hasArea: 314.1592653589793},\n        {name: "Triangle", shape: Triangle{base: 12, height: 6}, hasArea: 36.0},\n    }\n\n    // using tt.name from the case to use it as the `t.Run` test name\n    for _, tt := range areaTests {\n        t.Run(tt.name, func(t *testing.T) {\n            if tt.shape.area() != tt.hasArea {\n                t.Errorf("%#v got %.2f, wanted %.2f", tt.name, tt.shape.area(), tt.hasArea)\n            }\n        })\n    }\n}\n')),(0,r.kt)("h2",{id:"test-related"},"Test Related"),(0,r.kt)("h3",{id:"test-coverage"},(0,r.kt)("a",{parentName:"h3",href:"https://go.dev/blog/cover"},"Test coverage")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -cover")," to check the coverage of your code."),(0,r.kt)("h3",{id:"examples"},(0,r.kt)("a",{parentName:"h3",href:"https://go.dev/blog/examples"},"Examples")),(0,r.kt)("p",null,"They all start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Example"),". Leaving out ",(0,r.kt)("inlineCode",{parentName:"p"},"// Output: <value>")," results in the function being compiled but not executed. Code example will appear in ",(0,r.kt)("inlineCode",{parentName:"p"},"godoc"),", improving readability of documentation. ",(0,r.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/integers#examples"},"Learn Go with Tests")," has a great section explaining example test functions. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -v")," to see the output of the example functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},"func ExampleAdd() {\n    sum := Add(1, 5)\n    fmt.Println(sum)\n    // Output: 6\n}\n")),(0,r.kt)("h3",{id:"benchmarking"},(0,r.kt)("a",{parentName:"h3",href:"https://pkg.go.dev/testing#hdr-Benchmarks"},"Benchmarking")),(0,r.kt)("p",null,"They all start with ",(0,r.kt)("inlineCode",{parentName:"p"},"Benchmark"),". Replace ",(0,r.kt)("inlineCode",{parentName:"p"},'Repeat("a")')," with whatever you want to benchmark. ",(0,r.kt)("a",{parentName:"p",href:"https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/iteration#benchmarking"},"Learn Go with Tests")," has yet another great section explaining benchmarking. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -bench=.")," to run the benchmarks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'func BenchmarkRepeat(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        Repeat("a")\n    }\n}\n')))}g.isMDXComponent=!0}}]);