package model

import (
	"database/sql"
)

//UserMySQL is
type UserMySQL struct {
	DB *sql.DB
}

func NewUserMySQL() UserStore {
	dsn := "root:password@tcp(localhost:3306)/db_charty?parseTime=true&clientFoundRows=true"
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
