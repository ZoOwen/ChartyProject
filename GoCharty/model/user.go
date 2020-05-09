package model

import (
	"database/sql"
)

type UserStore interface {
	All() []User
	Save(*User) error
	// Find(int) *User
	// Update(*User) error
	// Delete(user *User) error
}

type User struct {
	id              int
	name, address   string
	telp            int
	email, password string
	role            int
	token           string
}

// CreateArticle to create article instance
func CreateUser(name, address, email, password string, telp, role int) (*User, error) {
	return &User{
		name:     name,
		address:  address,
		telp:     telp,
		email:    email,
		password: password,
		role:     role,
	}, nil
}

//UserMySQL is
type UserMySQL struct {
	DB *sql.DB
}

func NewUserMySQL() UserStore {
	dsn := "root:password@tcp(localhost:3307)/db_charity?parseTime=true&clientFoundRows=true"
	db, err := sql.Open("mysql", dsn)

	if err != nil {
		panic(err)
	}

	return &UserMySQL{DB: db}
}

func (store *UserMySQL) All() []User {
	users := []User{}
	rows, err := store.DB.Query("SELECT * FROM user")

	if err != nil {
		return users
	}
	user := User{}
	for rows.Next() {
		rows.Scan(&user.id, user.name, user.address, user.telp, user.email, user.password, user.role)
		users = append(users, user)
	}
	return users
}

func (store *UserMySQL) Save(user *User) error {
	result, err := store.DB.Exec(`
		INSERT INTO db_charity(name, address, telp, email, password, role) VALUES(?,?)`, user.name, user.address, user.telp, user.email, user.password, user.role,
	)

	if err != nil {
		return err
	}

	_, err = result.RowsAffected()

	if err != nil {
		return err
	}

	id, err := result.LastInsertId()

	if err != nil {
		return err
	}
	user.id = int(id)

	return nil
}
