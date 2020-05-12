package model

type User struct {
	ID       int
	Name     string
	Address  string
	Telp     int
	Email    string
	Password string
	Role     string
	Token    string
}

// CreateUser to create user instance
func CreateUser(name, address string, telp int, email, password, role, token string) (*User, error) {
	return &User{
		Name:     name,
		Address:  address,
		Telp:     telp,
		Email:    email,
		Password: password,
		Role:     role,
		Token:    token,
	}, nil
}
