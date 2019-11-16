package main

import (
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

func main() {
	// this sets up the psql db connection and authentication
	user := getEnv("CLOUD_SQL_USER", "postgres")
	password := getEnv("CLOUD_SQL_PASSWORD", "")
	host := getEnv("CLOUD_SQL_DATABASE_HOST", "localhost")

	connStr := fmt.Sprintf("dbname=facenodesdb sslmode=disable user=%s password=%s host=%s", user, password, host)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	// this is the endpoint and the funciton that is executed when you go to that endpoint
	fs := http.StripPrefix("/static/", http.FileServer(http.Dir("static"))) //this is the function
	http.Handle("/static/", fs)                                             // fs funciton called here
	// when you go to the home page it calls the groupPageHandler

	http.HandleFunc("/groups", groupPageHandler(db))
	http.HandleFunc("/FaceCards", FaceCardsHandler)
	http.HandleFunc("/", indexHandler)

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

// when you go to the home page; takes a db as an argument
func groupPageHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		groups, err := GetGroups(db)
		if err != nil {
			log.Fatal(err)
		}

		// this gets the html file
		t, err := template.ParseFiles("FaceCardsGroups.html")
		if err != nil {
			log.Fatal(err)
		}

		// title is getting changed... and the groups is getting changed
		p := &Page{Title: "Hello World!", Groups: groups}

		//w = write this page back to the http response...p is what is being writtne
		t.Execute(w, p)
	}
}

// loads home page
func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, fmt.Sprintf("%q not found", r.URL.Path), http.StatusNotFound)
		return
	}

	t, err := template.ParseFiles("index.html")
	if err != nil {
		log.Fatal(err)
	}
	p := &Page{Title: "FaceNodes!"}
	//w = write this page back to the http response...p is what is being writtne
	t.Execute(w, p)
}

func FaceCardsHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("FaceCards.html")
	if err != nil {
		log.Fatal(err)
	}
	p := &Page{Title: "FaceNodes!"}
	//w = write this page back to the http response...p is what is being writtne
	t.Execute(w, p)
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

// From the db database, get all the group names
func GetGroups(db *sql.DB) ([]string, error) {

	// this selects all groups and puts it in rows
	rows, err := db.Query("SELECT name FROM groups")

	// this means there was an error
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// this initializes a type; this says the variable group which is an emtry list of strings
	var groups []string

	//this is just a loop
	for rows.Next() {
		//for each row in rows.Next set g eqaul to the content of row that is being returned
		var g string
		if err := rows.Scan(&g); err != nil {
			return nil, err
		}
		// this creates a list
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
