# Facenodes

Last updated: 2019.09.22B

Facenodes is a service consisting of a:
- Postgres database
- Go server (connects to the database, accepts HTTP requests, serves static files)

It can be run locally with:

```
go run main.go
```

The static content is located in `/static`. 

To access the database locally in the terminal, run:
```
psql facenodesdb
```

Or you can use [TablePlus](https://tableplus.com/).

Once you are in database:

To insert a group:
```
INSERT INTO groups (name) VALUES ('<group>');
```

To insert a user:
```
INSERT INTO users (first_name, last_name) VALUES ('<first name>', '<last name>');
```

To connect a user to a group:
```
INSERT INTO user_groups (user_id, group_id) VALUES ('<user_id>', '<group_id>');
```

To see all groups:
```
SELECT * FROM groups;
```

To see a specific group groups:
```
SELECT * FROM groups WHERE name='<name>';
```

## Deployment
This service is hosted on http://facenodes.appspot.com using [App Engine Go1.12](https://cloud.google.com/appengine/docs/standard/go112/). To deploy run:

```
gcloud app deploy app.yaml
```

To look at the logs, run:

```
gcloud app logs tail -s default
```

## Migrations
Migrations are managed using [golang-migrate/migrate](https://github.com/golang-migrate/migrate). To create a new migration, run:
```
migrate create -ext sql -dir migrations -seq <filename>
```

The schema files are in `/migrations`. To migrate the schema to the latest file in `/migrations`, run:
```
migrate -source file:migrations -database postgres://localhost:5432/facenodesdb?sslmode=disable up
```

Instructions for running migrations are at:
- https://github.com/golang-migrate/migrate#cli-usage
- https://github.com/golang-migrate/migrate/tree/master/cmd/migrate
- https://github.com/golang-migrate/migrate/blob/master/MIGRATIONS.md

## Cloud SQL
The Postgres database is hosted in [Cloud SQL](https://console.cloud.google.com/sql/instances/facenodesdb/overview?project=facenodes). To connect to the Cloud SQL database, first run the cloud sql proxy:

```
cloud_sql_proxy -instances=facenodes:us-central1:facenodesd=tcp:5431
```

In a separate window, you can access the database with:

```
psql "postgres://<user>:<password>@<host>:<port>/<dbname>?sslmode=disable"

// For example:
psql "postgres://postgres:abc@localhost:5431/facenodesdb?sslmode=disable"
```

To migrate the Cloud SQL database: 
```
migrate -source file:migrations -database postgres://postgres@abc:localhost:5431/facenodesdb?sslmode=disable up
```

## External Libraries
At the moment, the Go server uses these libraries:
- https://godoc.org/github.com/lib/pq

It also uses these libraries from the [Go Standard Library](https://golang.org/pkg/):
- https://godoc.org/database/sql
- https://godoc.org/net/http
- https://godoc.org/os
- https://godoc.org/fmt
- https://godoc.org/log
