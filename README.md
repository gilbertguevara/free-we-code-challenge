# Frontend code challenge using Kotlin

I just want to test kotlin capabilities to compile to JavaScript. The project consists in four modules:

* **Common**: Just extension functions used across all the projects.
* **DatePicker**: An entire basic date picker library written entirely in Kotlin using kotlinx.html.
* **TimePicker**: An entire basic time picker library written entirely in Kotlin using kotlinx.html.
* **Main**: A project that integrates all on an appointment selection page.

## Getting Started

Just run:

```
./gradlew clean build
```

This will generate the index.html and all the files necessary to run the unit tests using qunit.

## Running the app

Navigate to web/index.html folder and open it on any browser.

## Running the tests

There are three generated HTML files under web:

* *_test-common.html_*
* *_test-datepicker.html_*
* *_test-timepicker.html_*

Opening every file on a browser will run qunit tests for every module.


## Built With

* [Kotlin](http://kotlinlang.org) - Kotlin language
* [Gradle](https://gradle.org/) - Dependency Management
* [Kotlinx.html](https://github.com/Kotlin/kotlinx.html) - DSL to build HTML

## Authors

* **Gilbert Guevara** - *Initial work*


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

