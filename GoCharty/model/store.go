package model

type UserStore interface {
	All() []User
	Save(*User) error
	// Find(int) *User
	// Update(*User) error
	// Delete(user *User) error
}

type EventStore interface {
	All() []Event
	Save(*Event) error
	// Find(int) *Event
	// Update(*Event) error
	// Delete(article *Event) error
}
