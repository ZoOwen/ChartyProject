package model

import (
	"crypto/sha1"
	"database/sql"
	"fmt"
	"log"
	"time"
)
//UserStoreMySQL is
type UserStoreMySQL struct {
	DB *sql.DB
}

func NewUserMySQL() UserStore {

	dsn := "root:password@tcp(localhost:3306)/db_charity?parseTime=true&clientFoundRows=true"

	db, err := sql.Open("mysql", dsn)

	if err != nil {
		panic(err)
	}
	return &UserStoreMySQL{DB: db}
}

func (store *UserStoreMySQL) All() []User {
	users := []User{}
	rows, err := store.DB.Query("SELECT * FROM user")

	if err != nil {
		return users
	}
	user := User{}
	for rows.Next() {
		rows.Scan(&user.ID, &user.Name, &user.Address, &user.Telp, &user.Email, &user.Password, &user.Role, &user.Token)
		users = append(users, user)
	}
	return users
}


func (store *UserStoreMySQL) Save(user *User) error {
	result, err := store.DB.Exec(`
		INSERT INTO user(name, address, telp, email, password, role, token) VALUES(?,?,?,?,?,?,?)`,
		user.Name,
		user.Address,
		user.Telp,
		user.Email,
		user.Password,
		user.Role,
		user.Token,
	)

	if err != nil {
		return err
	}

	_, err = result.RowsAffected()

	if err != nil {
		return err
	}

	lastID, err := result.LastInsertId()

	if err != nil {
		return err
	}
	user.ID = int(lastID)

	return nil
}

func (store *UserStoreMySQL) Find(id int) *User {
	user := User{}

	err := store.DB.
		QueryRow(`SELECT * FROM user WHERE id=?`, id).
		Scan(
			&user.ID,
			&user.Name,
			&user.Address,
			&user.Telp,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Token,
		)

	if err != nil {
		log.Fatal(err)
		return nil
	}

	return &user
}

func (store *UserStoreMySQL) FindRole(role int) []User {
	users := []User{}
	rows, err := store.DB.Query("SELECT * FROM user WHERE role=?", role)

	if err != nil {
		return users
	}
	user := User{}
	for rows.Next() {
		rows.Scan(&user.ID, &user.Name, &user.Address, &user.Telp, &user.Email, &user.Password, &user.Role, &user.Token)
		users = append(users, user)
	}
	return users
}

func (store *UserStoreMySQL) Update(user *User) error {
	result, err := store.DB.Exec(`
		UPDATE user SET name = ?, address = ?, telp = ?, email = ?, password = ? WHERE id =?`,
		user.Name,
		user.Address,
		user.Telp,
		user.Email,
		user.Password,
		user.ID,
	)

	if err != nil {
		return err
	}

	_, err = result.RowsAffected()
	if err != nil {
		return err
	}
	return nil

}

func (store *UserStoreMySQL) Delete(user *User) error {
	result, err := store.DB.Exec(`
	DELETE FROM user WHERE id = ?`,
		user.ID,
	)
	if err != nil {
		return err
	}

	_, err = result.RowsAffected()
	if err != nil {
		return nil
	}
	return nil
}

func Hash(password string) string {
	salt := fmt.Sprintf("%d", time.Now().UnixNano())
	saltedText := fmt.Sprintf("text: '%s', salt: %s", password, salt)
	sha := sha1.New()
	sha.Write([]byte(saltedText))
	encrypted := sha.Sum(nil)

	return fmt.Sprintf("%x", encrypted)
}
