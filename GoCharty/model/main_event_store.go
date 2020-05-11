package model

import (
	"database/sql"
)

type MainEventStore struct {
	DB *sql.DB
}

func NewMainEvent() EventStore {
	dsn := "root:@tcp(localhost:3306)/db_charty?parseTime=true&clientFoundRows=true"

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}

	return &MainEventStore{DB: db}
}

func (store *MainEventStore) All() []Event {
	events := []Event{}
	rows, err := store.DB.Query(`SELECT * FROM main_event`)
	if err != nil {
		return events
	}

	event := Event{}
	// event.name = "hallo"
	for rows.Next() {
		rows.Scan(&event.Id, &event.Img, &event.Name, &event.EventType, &event.Id_user, &event.TotalDonasi, &event.Status)
		events = append(events, event)
	}

	return events
}

func (store *MainEventStore) Save(event *Event) error {
	result, err := store.DB.Exec(`
		INSERT INTO test(img, name, event_type, id_user, total_donasi, status) VALUES(?,?,?,?,?,?)`,
		event.Img,
		event.Name,
		event.EventType,
		event.Id_user,
		event.TotalDonasi,
		event.Status,
	)
	if err != nil {
		return err
	}

	_, err = result.RowsAffected()
	if err != nil {
		return err
	}

	// update article.ID
	lastID, err := result.LastInsertId()
	if err != nil {
		return err
	}

	event.Id = int(lastID)

	return nil
}
