Voici le fichier README.md rédigé en Markdown :

📌 README.md – Installation & Setup

# 📚 Book Management System  

A simple book management system with:  
- **MySQL** for database 📊  
- **Node.js & Express API** 🚀  
- **Frontend (HTML/CSS/JS) with Nginx** 🎨  


## 🛠 Setup & Run  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/MaloWinrhy/docker-eval.git
cd book-management
```

### 2️⃣ Create a .env File

If not present, create it:
```sh
touch .env
```

**Add:**
```
DB_HOST=example  
DB_USER=example  
DB_PASSWORD=example  
DB_NAME=example  
DB_PORT=example  

MYSQL_ROOT_PASSWORD=example  
MYSQL_DATABASE=example  
```


### 3️⃣ Start the App with Docker
```sh
docker-compose up --build -d
```

	•	Database (MySQL) ✅
	•	API (Node.js) ✅
	•	Frontend (Nginx) ✅

**Check running containers:**

```sh
docker ps
```

### 4️⃣ Access the App
	•	Frontend: http://localhost
	•	API: http://localhost:3000

Test API:

curl -X GET http://localhost:3000/

✅ Response:

```json
{ "message": "Welcome to the API" }
```

## 📦 Useful Commands

### Command	Description

**Start services**
```sh
 docker-compose up -d
```
**Stop & remove containers**
```sh
docker-compose down
```
**Check running containers**
```sh
docker ps
```
**View API logs**
```sh
docker logs -f api
```

