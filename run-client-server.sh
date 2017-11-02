#!/bin/bash

gnome-terminal -e "bash -c \" 
				cd client
				npm start
 				exec bash\""




gnome-terminal -e "bash -c \"
				cd server
				npm start	
				exec bash\""
