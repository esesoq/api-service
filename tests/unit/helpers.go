package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

type User struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Phone   string `json:"phone"`
	Emails   []string `json:"emails"`
	PhoneNumbers []string `json:"phoneNumbers"`
}

type UserResponse struct {
	Users []User `json:"users"`
}

func GetUsersByEmail(email string) ([]User, error) {
	resp, err := http.Get("https://api.example.com/usersByEmail")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var users []User
	err = json.Unmarshal(body, &users)
	if err != nil {
		return nil, err
	}

	return users, nil
}

func GetUsersByPhone(phone string) ([]User, error) {
	resp, err := http.Get("https://api.example.com/usersByPhone")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var users []User
	err = json.Unmarshal(body, &users)
	if err != nil {
		return nil, err
	}

	return users, nil
}