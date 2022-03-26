cd server
start cmd /k "node run.js"
cd ..
cd client
start cmd /k "http-server"
start index.html