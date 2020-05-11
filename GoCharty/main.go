package main

import (
	"net/http"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo"
	"github.com/zoowen/ChartyProject/GoCharty/model"
	//"github.com/jumadimuhammad/goCharity/model"
)

func app(e *echo.Echo, store model.UserStore) {
	e.GET("/user", func(c echo.Context) error {
		// Process
		users := store.All()

		// Response
		return c.JSON(http.StatusOK, users)
	})

	// e.POST("/events", func(c echo.Context) error {

	// 	img := c.FormValue("img")
	// 	name := c.FormValue("name")
	// 	eventType := c.FormValue("eventType")
	// 	status := c.FormValue("status")
	// 	idUser, _ := strconv.Atoi(c.FormValue("id_user"))
	// 	totalDonasi, _ := strconv.ParseFloat(c.FormValue("totaldonasi"), 64)

	// 	event, _ := model.CreateEvent(img, name, eventType, status, idUser, totalDonasi)

	// 	store.Save(event)

	// 	return c.JSON(http.StatusOK, event)
	// })

	e.POST("/user", func(c echo.Context) error {
		// Given
		name := c.FormValue("name")
		address := c.FormValue("address")
		telp, _ := strconv.Atoi(c.FormValue("telp"))
		email := c.FormValue("email")
		password := c.FormValue("password")
		role, _ := strconv.Atoi(c.FormValue("role"))

		// Create instance
		user, _ := model.CreateUser(name, address, password, email, telp, role)

		// Persist
		store.Save(user)

		// Response
		return c.JSON(http.StatusOK, user)
	})

	// e.POST("/events", func(c echo.Context) error {

	// 	img := c.FormValue("img")
	// 	name := c.FormValue("name")
	// 	eventType := c.FormValue("eventType")
	// 	status := c.FormValue("status")
	// 	idUser, _ := strconv.Atoi(c.FormValue("id_user"))
	// 	totalDonasi, _ := strconv.ParseFloat(c.FormValue("totaldonasi"), 64)

	// 	event, _ := model.CreateEvent(img, name, eventType, status, idUser, totalDonasi)

	// 	store.Save(event)

	// 	return c.JSON(http.StatusOK, event)
	// })
}

func main() {
	// Echo instance
	var store model.UserStore
	driver := "mysql"

	if driver == "mysql" {
		store = model.NewUserMySQL()
	}

	e := echo.New()
	app(e, store)

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
