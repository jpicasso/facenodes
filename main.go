package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"html/template"
	"log"
	"net/http"
	"os"
)

func main() {
	user := getEnv("CLOUD_SQL_USER", "postgres")
	password := getEnv("CLOUD_SQL_PASSWORD", "")
	host := getEnv("CLOUD_SQL_DATABASE_HOST", "localhost")

	connStr := fmt.Sprintf("dbname=facenodesdb sslmode=disable user=%s password=%s host=%s", user, password, host)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	fs := http.StripPrefix("/static/", http.FileServer(http.Dir("static")))
	http.Handle("/static/", fs)
	http.HandleFunc("/", groupPageHandler(db))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}

type Page struct {
	Title  string
	Groups []string
}

func groupPageHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		groups, err := GetGroups(db)
		if err != nil {
			log.Fatal(err)
		}

		if r.URL.Path != "/" {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
			return
		}
		t, _ := template.ParseFiles("FaceCardsGroups.html")
		p := &Page{Title: "Hello!", Groups: groups}
		t.Execute(w, p)
	}
}

func indexHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		users, err := GetUsers(db)
		if err != nil {
			log.Fatal(err)
		}
		for _, u := range users {
			fmt.Fprintf(w, "Hello, %s %s!", u.FirstName, u.LastName)
		}
	}
}

/*
func editHandler(w http.ResponseWriter, r *http.Request) {
    title := r.URL.Path[len("/edit/"):]
    p, err := loadPage(title)
    if err != nil {
        p = &Page{Title: title}
    }
    fmt.Fprintf(w, "<h1>Editing %s</h1>"+
        "<form action=\"/save/%s\" method=\"POST\">"+
        "<textarea name=\"body\">%s</textarea><br>"+
        "<input type=\"submit\" value=\"Save\">"+
        "</form>",
        p.Title, p.Title, p.Body)
}
*/

type User struct {
	FirstName string
	LastName  string
}

func GetUsers(db *sql.DB) ([]*User, error) {
	rows, err := db.Query("SELECT first_name, last_name FROM users")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var users []*User
	for rows.Next() {
		var u User
		if err := rows.Scan(&u.FirstName, &u.LastName); err != nil {
			return nil, err
		}
		users = append(users, &u)
	}
	return users, nil
}

func InsertUser(db *sql.DB, firstName, lastName string) error {
	_, err := db.Exec("INSERT INTO users (first_name, last_name) VALUES($1, $2)", firstName, lastName)
	if err != nil {
		return err
	}
	return nil
}

func GetGroups(db *sql.DB) ([]string, error) {
	rows, err := db.Query("SELECT name FROM groups")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var groups []string
	for rows.Next() {
		var g string
		if err := rows.Scan(&g); err != nil {
			return nil, err
		}
		groups = append(groups, g)
	}
	return groups, nil
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
