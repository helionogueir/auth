# auth
A sign in application with Token and Refresh Token. Here I'm bringing part of what I'm studying about **Software Architecture, Algorithms, design Patterns**, and everything that I love to do as a Software Engineer.

Come with me, and let's learn more about software development, and feel free to open a PR if you want to help me with something.

## About the Source (`src`) Package

My approach here (_Application Architecture_) was using the _[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)_ as the base of the application, where:

- _[resources](src/resources/README.md)_ package represents the **Application Business Rules**;
- _[domain](src/domain/README.md)_ package represents the **Enterprise Business Rules**;
- _[app.config.js](src/app.config.sample.js) (copy/paste file)_ has the basic parameters to run the application. Just see the file; no doubt you will understand.

## About the Other Packages

- _[.eslint.config](.eslint.config)_ extra configuration to _[eslint](https://eslint.org)_;
- _[.swagger](.swagger)_ configuration to [swagger](https://swagger.js.org);
- _[.jest](.jest)_ configuration to [jest](https://jest.dev).
- _[.vscode](.vscode)_ workspace configuration to [vscode](https://code.visualstudio.com/docs/editor/workspaces#_singlefolder-workspace-settings).

## How to use this Application

You will need [docker](https://docs.docker.com/engine/install) and [docker-compose](https://docs.docker.com/compose/install) to use the commands below. It's necessary to access the repository root path.

### provisioning

[Provisioning](https://en.wikipedia.org/wiki/Provisioning_(technology)) is the process which involves the automated setup of infrastructure, including servers, networks, and storage, alongside the deployment and configuration of the macro/micro-services themselves, ensuring a scalable and secure environment."

```bash
$ docker-compose run --rm provisioning
```

### database

Start database service.

```bash
$ docker-compose run --rm database
```

### stop

Stop all services.

```bash
$ docker-compose down --volumes
```

### lint

[Lint](<https://en.wikipedia.org/wiki/Lint_(software)>) is the computer science term for a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs.

```bash
$ docker-compose run --rm lint
```

### Format

[Formart](https://en.wikipedia.org/wiki/Coding_conventions) (Coding Conventions) are a set of guidelines for a specific programming language that recommend programming style, practices, and methods for each aspect of a program written in that language..

```bash
$ docker-compose run --rm format
```

### tests

[Unit testing](https://en.wikipedia.org/wiki/Unit_testing), a.k.a. component or module testing, is a form of software testing by which isolated source code is tested to validate expected behavior

```bash
$ docker-compose run --rm tests
```

[Code coverage](https://en.wikipedia.org/wiki/Code_coverage), also called test coverage, is a percentage measure of the degree to which the source code of a program is executed when a particular test suite is run.

```bash
$ docker-compose run --rm tests-coverage
```

### build

[Build](https://en.wikipedia.org/wiki/Software_build) is the process of converting source code files into standalone software artifact(s) that can be run on a computer, or the result of doing so.

```bash
$ docker-compose run --rm build
```