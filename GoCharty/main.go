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
