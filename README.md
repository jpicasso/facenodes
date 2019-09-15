# Facenodes

Facenodes is a service consisting of a:
- Postgres database
- Go server

It can be run locally with:

```
go run main.go
```

## Deployment
This service is hosted on http://facenodes.appspot.com using [App Engine Go1.12](https://cloud.google.com/appengine/docs/standard/go112/). To deploy run:

```
gcloud app deploy app.yaml
```

## Migrations
Migrations are managed using [golang-migrate/migrate](https://github.com/golang-migrate/migrate). To create a new migration, run:
```
migrate create -ext sql -dir migrations -seq <filename>
```

Instructions for running migrations are at:
- https://github.com/golang-migrate/migrate#cli-usage
- https://github.com/golang-migrate/migrate/tree/master/cmd/migrate
- https://github.com/golang-migrate/migrate/blob/master/MIGRATIONS.md

## External Libraries 
At the moment, the Go server uses these libraries:
- https://godoc.org/github.com/lib/pq

It also uses these libraries from the [Go Standard Library](https://golang.org/pkg/):
- https://godoc.org/database/sql
- https://godoc.org/net/http
- https://godoc.org/os
- https://godoc.org/fmt
- https://godoc.org/log
