import { Database } from '@app/common/Environment'
import { Server } from '@app/common/Server'
import configs from 'app.config'

// Define the database url
Database.setDatabaseUrl(configs.database)

// Start the server
Server.start()
