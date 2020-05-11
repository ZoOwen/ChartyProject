package model

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
