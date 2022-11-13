## addUser/Register

| Atrributes    | Tipe Data 	| Deksripsi                    |
| ------------- | ------------- | ---------------------------- |
| name      	| String    	| nama akun pengguna           |
| email 	| String    	| untuk autentifikasi pengguna |
| password      | String    	| untuk autentifikasi pengguna |
| address	| String, Number| alamat pengguna	       |

Request :

- Method : POST
- Endpoint : user
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
	 name: String,
   	 email:{
        	type: String,
        	required :true,
    },
    	password: String,
   	 address: {
       		 name : String,
       		 no: Number,
        	 kecamatan: String,
   		  }
    }
```

- Response :

```javascript
    {
        "msg" : "User berhasil dimasukkan",
    }
```

# Login

| Atrributes | Tipe Data | Deksripsi                    |
| ---------- | --------- | ---------------------------- |
| email	     | String    | email akun pengguna          |
| password   | String    | untuk autentifikasi pengguna |

Request :

- Method : POST
- Endpoint : user/login
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
        "email"    : "string",
        "password" : "string"
    }
```

- Response :

```javascript
    {
	{
         message: "Berhasil login",
         token
	} else
	{
	 message: "Ente siapa?"
	}
    }
```


## Tugas Atrributes

| Atrributes    | Tipe Data | Deksripsi                                   	 |
| ------------- | --------- | ---------------------------------------------------|
| name    	| String    | Judul tugas                   			 |
| isDone        | Boolean   | Menentukan apakah tugas telah selesai atau tidak   |
| user 		| String    | Referensi user yang mengisi tugas 		 |

# addTugas/Membuat Todo list

Request :

- Method : POST
- Endpoint : tugas
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :

```javascript
    {
      	 name: String,
 	 isDone: Boolean,
 	 user: String
    }
```

- Response :

```javascript
    {
        message:"data created!!!"
    }
```
# getAllTugas/Melihat semua todo

Request :

- Method : GET
- Endpoint : tugas
- Header :
  - Accept : application/json
- Response :

```javascript
   {
	"message": "succes get data",
    	{
     	 "_id": "Stirng",
    	  "name": "String",
      	"isDone": Boolean,
     	 "user": "Array" {
      	  "_id": "String",
      	  "name": "String"
     	 },
    	  "__v": 0
    	}
    }
```

# getTugasByID/Melihat detail todo

Request :

- Method : GET
- Endpoint : /tugas/:id
- Header :
  - Accept : application/json

Response :

```javascript
    {
	"message": "succes get data",
    	{
     	 "_id": "Stirng",
    	  "name": "String",
      	"isDone": Boolean,
     	 "user": "Array" {
      	  "_id": "String",
      	  "name": "String"
     	 },
    	  "__v": 0
    	}
    }
```

# updateTugasByID/Mengubah todo

Request :

- Method : PUT
- Endpoint : /tugas/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json

Body :

```javascript
    {
        name: "String",
 	 isDone: "Boolean",
 	 user: "String"
  }
    }
```

Response :

```javascript
    {
   	 "doc": {
   	 "acknowledged": boolean,
    	 "modifiedCount": "number,
   	 "upsertedId": "number",
    	 "upsertedCount": "number,
   	 "matchedCount": "number
 	 },
  	  "message": "tugas telah diupdate"
    }
```

# deleteTugasByID/Menghapus todo

Request :

- Method : DELETE
- Endpoint : tugas/:id
- Header :
  - Accept: application/json

Response :

```javascript
    {
        "_id": "String",
  	"name": "String",
 	 "isDone": "Boolean",
  	"user": "String",
 	 "__v": "Number"
    }
```


# deleteAllTugas/Menghapus semua todo

Request :

- Method : DELETE
- Endpoint : tugas/all/:id
- Header :
  - Accept: application/json

Response :

```javascript
    {
        "_id": "String",
  	"name": "String",
 	 "isDone": "Boolean",
  	"user": "String",
 	 "__v": "Number"
    }
```